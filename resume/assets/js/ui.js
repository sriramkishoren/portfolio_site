/**
 * UI Rendering Helpers
 */

window.UI = {
    renderHero(personal) {
        const heroContent = document.getElementById('hero-content');
        heroContent.innerHTML = `
            <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-2 tracking-tight animate-slide-up">${personal.name}</h1>
            <p class="text-lg md:text-xl text-blue-600 font-medium mb-3 animate-slide-up" style="animation-delay: 100ms">${personal.title}</p>
            <p class="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-5 leading-relaxed animate-slide-up" style="animation-delay: 200ms">${personal.summary}</p>
            <div class="flex flex-col sm:flex-row justify-center gap-3 animate-slide-up" style="animation-delay: 300ms">
                <a href="#ask-ai" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full font-semibold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Chat with AI</a>
                <a href="#fit-analyzer" class="px-5 py-2 bg-white text-gray-900 border border-gray-200 hover:border-blue-300 text-sm rounded-full font-semibold transition-all shadow-sm hover:shadow-md" onclick="document.getElementById('jd-input').focus()">Analyze Job Fit</a>
            </div>
        `;
    },

    renderExperience(work) {
        const container = document.getElementById('timeline-container');
        let html = '';

        work.forEach((job, index) => {
            const isLast = index === work.length - 1;

            let projectsHtml = '';
            if (job.projects) {
                projectsHtml = job.projects.map(p => `
                    <div class="mt-6 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-100 transition-colors">
                        <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <h4 class="text-lg font-bold text-gray-800">${p.name}</h4>
                            <span class="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded mt-1 md:mt-0">${p.period}</span>
                        </div>
                        <p class="text-sm text-gray-600 mb-4 italic">"${p.importance}"</p>
                        <ul class="space-y-2">
                            ${p.metrics.map(m => `<li class="flex items-start text-sm text-gray-600"><i class="fas fa-check text-green-500 mt-1 mr-2 flex-shrink-0"></i> <span>${m}</span></li>`).join('')}
                        </ul>
                    </div>
                `).join('');
            }

            let highlightsHtml = '';
            if (job.highlights) {
                highlightsHtml = `
                    <ul class="mt-4 space-y-2">
                        ${job.highlights.map(h => `<li class="flex items-start text-sm text-gray-600"><i class="fas fa-angle-right text-blue-400 mt-1 mr-2 flex-shrink-0"></i> <span>${h}</span></li>`).join('')}
                    </ul>
                 `;
            }

            html += `
                <div class="relative pl-8 md:pl-12 opacity-0 monitor-viewport" style="transition-delay: ${index * 100}ms">
                    <!-- Dot -->
                    <div class="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white"></div>
                    
                    <!-- Card -->
                    <div class="bg-white rounded-2xl p-1 mb-2">
                        <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 class="text-xl font-bold text-gray-900">${job.role} <span class="text-gray-400 font-normal">at</span> <span class="text-blue-700">${job.company}</span></h3>
                            <span class="text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">${job.period}</span>
                        </div>
                        <p class="text-gray-600 mb-2">${job.description || ''}</p>
                        ${projectsHtml}
                        ${highlightsHtml}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    },

    renderCapabilities(capabilities) {
        const container = document.getElementById('capabilities-container');

        const sections = [
            { title: "Strong Areas", icon: "fa-certificate", color: "text-green-600", bg: "bg-green-50", items: capabilities.strong },
            { title: "Moderate Growth", icon: "fa-chart-line", color: "text-orange-500", bg: "bg-orange-50", items: capabilities.moderate },
            { title: "Gaps (I'll Tell You)", icon: "fa-exclamation-circle", color: "text-red-500", bg: "bg-red-50", items: capabilities.gaps }
        ];

        container.innerHTML = sections.map((sec, i) => `
            <div class="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 opacity-0 monitor-viewport" style="transition-delay: ${i * 150}ms">
                <div class="flex items-center mb-6">
                    <div class="w-12 h-12 rounded-full ${sec.bg} flex items-center justify-center mr-4">
                        <i class="fas ${sec.icon} ${sec.color} text-xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">${sec.title}</h3>
                </div>
                <ul class="space-y-4">
                    ${sec.items.map(item => `
                        <li class="flex items-start">
                            <i class="fas fa-check-circle ${sec.color} opacity-50 mt-1 mr-3 text-xs"></i>
                            <span class="text-gray-600 text-sm font-medium">${item}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    },

    renderSkills(skills) {
        const container = document.getElementById('skills-container');

        const sqlDbs = skills.databases && skills.databases.sql ? skills.databases.sql : [];
        const nosqlDbs = skills.databases && skills.databases.nosql ? skills.databases.nosql : [];

        const groups = [
            { label: "AI", items: skills.ai || [], type: 'ai' },
            { label: "Cloud", items: skills.cloud || [], type: 'cloud' },
            { label: "Languages", items: skills.languages || [], type: 'lang' },
            { label: "Frameworks & Libraries", items: skills.frameworks || [], type: 'framework' },
            { label: "Data Engineering & SQL", items: skills.data_engineering || [], type: 'data' },
            { label: "Databases (SQL)", items: sqlDbs, type: 'db-sql' },
            { label: "Databases (NoSQL)", items: nosqlDbs, type: 'db-nosql' },
            { label: "Platforms", items: skills.platforms || [], type: 'plat' },
            { label: "Operational Excellence", items: skills.observability || [], type: 'ops' },
            { label: "Soft Skills", items: skills.soft || [], type: 'soft' }
        ];

        const typeClasses = {
            ai: "bg-purple-50 text-purple-700 border-purple-200",
            cloud: "bg-blue-50 text-blue-700 border-blue-200",
            lang: "bg-emerald-50 text-emerald-700 border-emerald-200",
            framework: "bg-teal-50 text-teal-700 border-teal-200",
            data: "bg-amber-50 text-amber-800 border-amber-200",
            'db-sql': "bg-indigo-50 text-indigo-700 border-indigo-200",
            'db-nosql': "bg-sky-50 text-sky-700 border-sky-200",
            plat: "bg-rose-50 text-rose-700 border-rose-200",
            ops: "bg-orange-50 text-orange-700 border-orange-200",
            soft: "bg-gray-100 text-gray-700 border-gray-200"
        };

        container.innerHTML = `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5 w-full">
                ${groups.filter(g => g.items.length).map(g => `
                    <div>
                        <h4 class="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">${g.label}</h4>
                        <div class="flex flex-wrap gap-1.5">
                            ${g.items.map(item => `<span class="px-2.5 py-1 rounded-md border text-xs font-medium ${typeClasses[g.type]} cursor-default">${item}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    },

    renderAiMlData(items) {
        const container = document.getElementById('ai-ml-data-container');
        if (!container || !Array.isArray(items)) return;

        container.innerHTML = items.map((item, i) => `
            <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow opacity-0 monitor-viewport" style="transition-delay: ${i * 120}ms">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                        <h3 class="text-lg md:text-xl font-bold text-gray-900">${item.name}</h3>
                        <p class="text-sm text-gray-500 mt-1">${item.context || ''}</p>
                    </div>
                    <span class="text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap self-start">${item.period}</span>
                </div>
                <ul class="space-y-2 mt-4">
                    ${(item.highlights || []).map(h => `
                        <li class="flex items-start text-sm text-gray-700 leading-relaxed">
                            <i class="fas fa-bolt text-yellow-500 mt-1 mr-3 flex-shrink-0 text-xs"></i>
                            <span>${h}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    },

    renderCertifications(certs) {
        const container = document.getElementById('certifications-container');
        if (!container || !Array.isArray(certs)) return;

        container.innerHTML = certs.map((c, i) => `
            <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow opacity-0 monitor-viewport" style="transition-delay: ${i * 120}ms">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-graduation-cap text-purple-600 text-lg"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                            <h3 class="text-lg font-bold text-gray-900">${c.name}</h3>
                            <span class="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap self-start md:self-auto">${c.year}</span>
                        </div>
                        <p class="text-sm font-semibold text-gray-700">${c.issuer}</p>
                        ${c.school ? `<p class="text-xs text-gray-500 mb-3">${c.school}</p>` : ''}
                        ${c.description ? `<p class="text-sm text-gray-600 leading-relaxed mt-2">${c.description}</p>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    },

    renderEducation(edu) {
        const container = document.getElementById('education-container');
        if (!container || !edu) return;

        container.innerHTML = `
            <div class="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm opacity-0 monitor-viewport">
                <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <i class="fas fa-university text-blue-600 text-lg"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-1">
                            <h3 class="text-lg font-bold text-gray-900">${edu.degree}</h3>
                            <span class="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded whitespace-nowrap self-start md:self-auto">${edu.period}</span>
                        </div>
                        <p class="text-sm font-semibold text-gray-700">${edu.school}</p>
                        ${edu.location ? `<p class="text-xs text-gray-500">${edu.location}</p>` : ''}
                    </div>
                </div>
            </div>
        `;
    },

    appendChatMessage(text, sender) {
        const container = document.getElementById('chat-messages');
        const isAi = sender === 'ai';

        const div = document.createElement('div');
        div.className = `flex items-start ${isAi ? '' : 'flex-row-reverse'} animate-fade-in`;

        div.innerHTML = `
            <div class="${isAi ? 'bg-blue-600' : 'bg-gray-600'} rounded-full p-2 ${isAi ? 'mr-3' : 'ml-3'} flex-shrink-0">
                <i class="fas ${isAi ? 'fa-robot' : 'fa-user'} text-white text-xs"></i>
            </div>
            <div class="${isAi ? 'bg-gray-700 text-gray-200' : 'bg-blue-600 text-white'} rounded-lg ${isAi ? 'rounded-tl-none' : 'rounded-tr-none'} p-3 text-sm max-w-[85%] shadow-md">
                ${this.formatMarkdown(text)}
            </div>
        `;

        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    },

    formatMarkdown(text) {
        // Simple bold formatting
        return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    },

    _scoreInterval: null,

    _scoreColors(score) {
        if (score >= 70) return { text: 'text-green-400', bar: 'bg-green-500', heading: 'text-green-300' };
        if (score >= 40) return { text: 'text-yellow-400', bar: 'bg-yellow-500', heading: 'text-yellow-300' };
        return { text: 'text-red-400', bar: 'bg-red-500', heading: 'text-red-300' };
    },

    updateJobFitResult(result) {
        const resultsDiv = document.getElementById('fit-results');
        const scoreEl = document.getElementById('match-score');
        const barEl = document.getElementById('match-bar');
        const reasonsEl = document.getElementById('match-reasons');
        const gapEl = document.getElementById('match-gaps');
        const headingEl = document.getElementById('match-heading');

        // Sanitize score: must be a number between 0 and 100
        const score = Math.max(0, Math.min(100, Math.round(Number(result.score) || 0)));

        // Clear previous animation and reset UI
        if (this._scoreInterval) clearInterval(this._scoreInterval);
        scoreEl.innerText = '0%';
        scoreEl.className = 'text-3xl font-bold';
        barEl.style.width = '0%';
        barEl.className = 'h-2.5 rounded-full';
        headingEl.className = 'text-sm font-semibold mb-1 uppercase tracking-wider';
        reasonsEl.innerHTML = '';
        gapEl.innerHTML = '';

        resultsDiv.classList.remove('hidden');

        // Apply colors based on sanitized score
        const colors = this._scoreColors(score);
        scoreEl.classList.add(colors.text);
        barEl.classList.add(colors.bar);
        headingEl.classList.add(colors.heading);

        // Animate Score (skip animation if score is 0)
        if (score === 0) {
            scoreEl.innerText = '0%';
            barEl.style.width = '0%';
        } else {
            let current = 0;
            this._scoreInterval = setInterval(() => {
                current += 2;
                if (current >= score) {
                    current = score;
                    clearInterval(this._scoreInterval);
                    this._scoreInterval = null;
                }
                scoreEl.innerText = `${current}%`;
                barEl.style.width = `${current}%`;
            }, 20);
        }

        // Populate Lists (guard against non-array values)
        const reasons = Array.isArray(result.reasons) ? result.reasons : [];
        reasonsEl.innerHTML = reasons.length
            ? reasons.map(r => `<li>${this.formatMarkdown(String(r))}</li>`).join('')
            : '<li>No specific matches found for this role.</li>';
        const gaps = Array.isArray(result.gaps) ? result.gaps
            : (result.gap ? [result.gap] : ['None detected for this role.']);
        gapEl.innerHTML = gaps.map(g => `<li>${this.formatMarkdown(String(g))}</li>`).join('');
    }
};
