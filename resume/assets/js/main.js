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
    ui.renderExperience(data.work);
    ui.renderCapabilities(data.capabilities);
    ui.renderSkills(data.skills);

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

        // API Call
        const response = await window.ApiMock.askAI(text);

        // Remove loading and show response
        removeLoading(loadingId);
        window.UI.appendChatMessage(response, 'ai');
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
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
        btn.disabled = true;

        const result = await window.ApiMock.jobFit(text);

        btn.innerHTML = originalText;
        btn.disabled = false;

        window.UI.updateJobFitResult(result);
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
