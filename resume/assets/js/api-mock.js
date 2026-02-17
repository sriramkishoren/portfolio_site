// Helper to simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

window.ApiMock = {
    /**
     * Mocks the "Ask AI" endpoint.
     * Analyzes the question and returns a relevant answer from resumeData.
     */
    async askAI(question) {
        await delay(1000 + Math.random() * 1000); // 1-2s delay

        const q = question.toLowerCase();

        // Core Logic matches
        if (q.includes('leadership') || q.includes('team') || q.includes('manage')) {
            return `Kishore is a seasoned Engineering Lead with 20 years of experience. He currently leads a team of 8 at Walmart on the Assortment Platform and previously managed 6 engineers at InBiz. He believes in "Commitment, Coaching, and Compassion" and has successfully mentored team members to promotion.`;
        }

        if (q.includes('walmart') || q.includes('pos') || q.includes('assortment')) {
            return `At Walmart, Kishore has driven two major platforms:
            1. **POS Hardware Abstraction**: A mission-critical middleware managing 50k+ endpoints, saving millions in fees and improving reliability.
            2. **Assortment Orchestration**: Reduced time-to-market by 50% (40 weeks to 20) and saved ~$5M/year by automating merchant workflows.`;
        }

        if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('java')) {
            return `Kishore's core stack includes Java, Python, JavaScript, React, and Spring. He is an expert in Cloud (Azure, GCP), Observability (Grafana, Prometheus), and Distributed Systems. Recently, he has been focusing on Agentic AI and "Vibe Coding".`;
        }

        if (q.includes('gap') || q.includes('weakness')) {
            return `Kishore is transparent about his gaps: He is not specialized in Mobile Development or heavy Web UI Development, and he hasn't handled year-end HR reviews yet. He focuses on Backend Architecture, Cloud, and Engineering Leadership.`;
        }

        if (q.includes('agent') || q.includes('ai')) {
            return `Kishore is actively upskilling in Agentic AI, Vibe Coding, and using tools like Claude Code to accelerate development. He believes in using AI to amplify engineering productivity.`;
        }

        // Default response
        return `I can tell you that Kishore is a Solutions Architect with 20 years of experience, specializing in High-Scale Distributed Systems, Cloud Computing, and Engineering Leadership. Ask me about his projects at Walmart or his technical skills!`;
    },

    /**
     * Mocks the "Job Fit Analyzer" endpoint.
     * Scans JD for keywords and returns a calculated score + analysis.
     */
    async jobFit(jdText) {
        await delay(1500 + Math.random() * 1000); // 1.5-2.5s delay

        const jd = jdText.toLowerCase();
        const strongKeywords = window.resumeData.capabilities.strong.map(s => s.toLowerCase().split(' '));
        const skillKeywords = [...window.resumeData.skills.languages, ...window.resumeData.skills.cloud, ...window.resumeData.skills.frameworks].map(s => s.toLowerCase());

        let score = 0;
        const matches = [];

        // Simple keyword matching for score
        // Base score 60%
        score = 60;

        // Check for specific tech skills
        skillKeywords.forEach(skill => {
            if (jd.includes(skill)) {
                score += 2;
                if (matches.length < 3) matches.push(`Matches skill: **${skill.toUpperCase()}**`);
            }
        });

        // Check for leadership terms
        if (jd.includes('lead') || jd.includes('architect') || jd.includes('manage')) {
            score += 10;
            matches.push("Matches **Leadership/Architecture** requirements");
        }

        // Check for scale/cloud
        if (jd.includes('cloud') || jd.includes('scale') || jd.includes('distributed')) {
            score += 5;
            matches.push("Matches **High-Scale Distributed Systems** experience");
        }

        // Cap at 98%
        score = Math.min(98, score);
        score = Math.max(65, score); // Min 65% for morale :)

        // Random gap or "None"
        const gaps = window.resumeData.capabilities.gaps;
        const randomGap = Math.random() > 0.7 ? gaps[Math.floor(Math.random() * gaps.length)] : "None detected for this specific role.";

        return {
            score: Math.round(score),
            reasons: matches.slice(0, 4), // Top 4 reasons
            gap: randomGap
        };
    }
};
