document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Static Data
    // Access global objects attached to window
    const data = window.resumeData;
    const ui = window.UI;

    if (!data || !ui) {
        console.error("Resume data or UI module not loaded properly");
        return;
    }

    ui.renderHero(data.personal);
    if (data.ai_ml_data_experience) ui.renderAiMlData(data.ai_ml_data_experience);
    ui.renderExperience(data.work);
    ui.renderCapabilities(data.capabilities);
    if (data.certifications) ui.renderCertifications(data.certifications);
    if (data.education) ui.renderEducation(data.education);
    ui.renderSkills(data.skills);

    // Wake up Render backend (free tier sleeps ~15min; cold start ~30-60s).
    // Track the promise so AI actions can await it instead of racing it.
    const API_BASE = 'https://kishore-resume-api.onrender.com';
    let isBackendWarm = false;
    const warmupPromise = fetch(API_BASE + '/api/health', {
        signal: AbortSignal.timeout(90000)
    })
        .then(res => { if (res.ok) isBackendWarm = true; })
        .catch(() => {});

    async function awaitWarmup(onCold) {
        if (isBackendWarm) return;
        if (onCold) onCold();
        await warmupPromise;
    }

    // 2. Setup Intersection Observer for scroll animations
    setupScrollAnimations();

    // 3. Setup Global Event Handlers
    window.handleChatEnter = async (e) => {
        if (e.key === 'Enter') await sendChatMessage();
    };

    // Dark Mode Toggle
    const toggleBtn = document.getElementById('dark-mode-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            // Check if we need to implement Tailwind dark mode support fully (add class='dark' to html)
            // But since existing tailwind config might not have 'darkMode: class', we rely on manual class toggling if refined.
            // For now, let's assume we are just toggling the button text or applying a class.

            // Actually, based on default tailwind, we need to ensure 'darkMode: "class"' is in regex config 
            // or just swap basic colors manually if not. 
            // But let's first update the config in the HTML to support it.
        });
    }

    window.sendChatMessage = async () => {
        const input = document.getElementById('chat-input');
        const text = input.value.trim();
        if (!text) return;

        // User Message
        window.UI.appendChatMessage(text, 'user');
        input.value = '';

        // Simulate Thinking
        const loadingId = 'loading-' + Date.now();
        showLoading(loadingId);

        await awaitWarmup(() => updateLoadingMessage(loadingId,
            '<i class="fas fa-circle-notch fa-spin"></i> Waking AI service, this may take ~30 seconds...'));
        updateLoadingMessage(loadingId, '<i class="fas fa-circle-notch fa-spin"></i> Thinking...');

        // API Call
        try {
            const res = await fetch(API_BASE + '/api/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: text }),
                signal: AbortSignal.timeout(90000)
            });
            removeLoading(loadingId);
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                window.UI.appendChatMessage(errData.error || 'Sorry, the AI service is temporarily unavailable. Please try again later.', 'ai');
                return;
            }
            const data = await res.json();
            window.UI.appendChatMessage(data.answer || 'Something went wrong.', 'ai');
        } catch (err) {
            removeLoading(loadingId);
            window.UI.appendChatMessage('Sorry, the AI service is temporarily unavailable. Please try again later.', 'ai');
        }
    };

    window.analyzeJobFit = async () => {
        const input = document.getElementById('jd-input');
        const text = input.value.trim();
        if (!text) {
            alert("Please paste a job description first.");
            return;
        }

        const btn = document.querySelector('button[onclick="analyzeJobFit()"]');
        const originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

        await awaitWarmup(() => {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Waking AI (~30s)...';
        });
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';

        try {
            const res = await fetch(API_BASE + '/api/job-fit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ jd: text }),
                signal: AbortSignal.timeout(90000)
            });
            btn.innerHTML = originalText;
            btn.disabled = false;
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                alert(errData.error || 'AI service is temporarily unavailable. Please try again later.');
                return;
            }
            const result = await res.json();
            window.UI.updateJobFitResult(result);
        } catch (err) {
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert('AI service is temporarily unavailable. Please try again later.');
        }
    };
});

function showLoading(id) {
    const container = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.id = id;
    div.className = "flex items-start animate-fade-in";
    div.innerHTML = `
        <div class="bg-blue-600 rounded-full p-2 mr-3 flex-shrink-0">
            <i class="fas fa-robot text-white text-xs"></i>
        </div>
        <div class="bg-gray-700 rounded-lg rounded-tl-none p-3 text-sm text-gray-400">
            <i class="fas fa-circle-notch fa-spin"></i> Thinking...
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function updateLoadingMessage(id, html) {
    const el = document.getElementById(id);
    if (!el) return;
    const bubble = el.querySelector('div.bg-gray-700');
    if (bubble) bubble.innerHTML = html;
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                entry.target.classList.remove('opacity-0');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.monitor-viewport').forEach(el => observer.observe(el));
}
