window.resumeData = {
    personal: {
        name: "Sriramkishore Naraharisetti",
        title: "Engineering Lead & Solutions Architect",
        summary: "Engineering Lead with 20 years of experience in software. Expertise in cloud-based technologies and microservices, specialized in architecting operational excellence through automated metric tracking and observability. Deep data-engineering foundation with TB-scale pipeline validation on Hadoop/Hive, Ab Initio, Informatica, and the SSIS/SSRS/SSAS stack — backed by hands-on agentic AI and LLM application work and recent AI/ML certifications from UT Austin McCombs (PGP-AIML, 2024) and Johns Hopkins (AI Business Strategy, 2026).",
        experience_summary: "Managing teams, problem-solving and strategic thinking, with the ability to anticipate future needs and challenges."
    },
    ai_ml_data_experience: [
        {
            name: "Agentic AI & LLM Application Development",
            context: "Applied / Personal",
            period: "2025 – Present",
            highlights: [
                "Built and deployed an agentic engineering workflow using Claude Code, implementing a structured PLAN → SPEC → TODO → IMPLEMENT → TEST → CONFIRM orchestration loop with persistent context (CLAUDE.md) for reproducible, multi-step AI-driven development.",
                "Shipped kishoretech.com end-to-end using this agentic workflow; published the approach on Medium and LinkedIn as a practical pattern for AI-augmented software delivery.",
                "Developed an LLM-powered content generation pipeline that ingests source documents and produces structured, single-file interactive HTML deliverables using consistent prompt templates and reproducible output specifications."
            ]
        },
        {
            name: "Data Engineering Validation & SQL at Enterprise Scale",
            context: "Enterprise (J.P. Morgan & Microsoft)",
            period: "2011 – 2017",
            highlights: [
                "Validated TB-scale data pipelines built in Ab Initio and Informatica on Hadoop/Hive (retail banking, J.P. Morgan) and on SSIS/SSRS/SSAS (billing and internal financial data, Microsoft); authored complex SQL for reconciliation, schema validation, and end-to-end data quality across millions of records — foundational data-engineering discipline that translates directly to ML training-data verification and feature-pipeline validation.",
                "Built reusable data-validation frameworks codifying data-quality patterns across teams: saved 7,000 engineering hours annually at J.P. Morgan and cut data-warehouse regression cycles from 80 to 15 hours per build (80% ROI) at Microsoft."
            ]
        }
    ],
    work: [
        {
            company: "Walmart",
            role: "Solutions Architect",
            period: "11/2018 – Present",
            logo: "fab fa-walmart",
            projects: [
                {
                    name: "POS Hardware Abstraction Platform",
                    period: "02/2024 – Present",
                    description: "Unified middleware platform exposing standardized APIs to control POS peripherals — pinpads, scales, scanners, and printers — decoupling the software layer from hardware drivers so registers stay vendor-agnostic and clients can swap hardware components without core code changes.",
                    importance: "Mission-critical retail infrastructure across 5,000+ Walmart locations in the US and Canada and 50,000+ endpoints. Sits in the critical path of store revenue — downtime carries a projected fiscal impact of up to $100M daily — and delivers massive savings through proprietary-vendor fee elimination.",
                    metrics: [
                        "Architected and optimized MMS dashboards, reducing latency and boosting adoption for proactive issue detection across teams",
                        "Designed context-aware MMS alerting, cutting false positives by 40% via dedup with Overwatch and Spotlight",
                        "Automated wave-level deployment validation into CICD, saving 30% validation time while meeting Auto CRQ compliance",
                        "Drove 95%+ test coverage and zero Sonar vulnerabilities across 15+ repositories with strict PR quality gates",
                        "Engineered a fully automated CICD pipeline with one-click rollback, test/hotfix flows, and multi-client support",
                        "Delivered a self-service deployment tool for lower environments, reducing staff engineer workload by 50%",
                        "Architected real-time device heartbeat and error event pipelines for auto-healing, cutting MTTR by 25%"
                    ]
                },
                {
                    name: "End-to-End Assortment Orchestration Platform",
                    period: "02/2024 – Present",
                    description: "Mission-critical platform integrating Machine Learning recommendations into the merchant workflow to optimize product assortments. Architected the downstream automation pipeline that transforms finalized merchant plans into automated item creation in catalog platforms and Purchase Orders (POs) for supplier logistics.",
                    importance: "Cut merchant time-to-market from 40 weeks to 20 (50% reduction), accelerating 'speed-to-shelf' and driving revenue growth by enabling Walmart to respond faster to market trends.",
                    metrics: [
                        "Leading a team of 8 engineers; coached and mentored — 1 promotion delivered, 3 more in line",
                        "Multi-tenant workflow management system automating supplier onboarding, item creation, and PO generation for store and e-commerce — saving ~$5M/year",
                        "Reduced engineering touch time by 30% via utility tools and comprehensive troubleshooting documentation",
                        "Cultivated a culture of risk-taking and mutual support, increasing team productivity by 25%",
                        "Provided effective leadership through major org changes, ensuring uninterrupted delivery and high team morale"
                    ]
                }
            ]
        },
        {
            company: "InBiz Concepts Inc",
            role: "Automation Lead",
            period: "10/2017 – 11/2018",
            description: "Managed a fintech client's automation testing project, leading a team of 6 engineers across India and Argentina.",
            highlights: [
                "Led planning, design, execution, and delivery of the framework that automated web application and microservices testing",
                "Built and maintained strong client relations with InComm, fostering trust and customer satisfaction"
            ]
        },
        {
            company: "J.P. Morgan",
            role: "Automation Lead",
            period: "10/2014 – 08/2017",
            description: "Domain: Retail Banking. Built and led the automation framework for TB-scale data pipelines developed in Ab Initio and Informatica on Hadoop/Hive — covering ingestion, transformation, and reconciliation across millions of customer and transaction records.",
            highlights: [
                "Authored complex SQL (HiveQL and ANSI SQL) for schema validation, end-to-end data reconciliation, and data-quality checks — the same discipline ML training-data verification and feature-pipeline validation depend on",
                "Built reusable Big Data automation framework with a team of 5 engineers, saving 7,000 engineering hours annually",
                "Coached and trained testing teams on Core Java and SQL-driven data testing across the data warehousing stack"
            ]
        },
        {
            company: "Tata Consultancy Services",
            role: "ETL Tester",
            period: "11/2011 – 10/2014",
            description: "Domain: Billing and internal financial data. Contracted at Microsoft, validated data-warehouse and ETL pipelines on the SSIS / SSRS / SSAS stack — covering ingestion, transformation, reconciliation, and reporting layers.",
            highlights: [
                "Authored complex T-SQL queries for reconciliation, schema integrity, and data-quality checks across multi-source financial datasets",
                "Automated data-warehouse regression testing — reducing regression hours from 80 to 15 per build (80% ROI)"
            ]
        },
        {
            company: "Delta Technology",
            role: "QA Engineer",
            period: "11/2009 – 10/2011",
            description: "Contributed to the company's successful attainment of CMMI Level-3 certification.",
            highlights: [
                "Developed Hybrid Automation Framework using QTP for UI automation in ToPS project — 65% ROI in first year with Automation Index of 60%"
            ]
        },
        {
            company: "Prime KI Solutions",
            role: "QA Engineer",
            period: "05/2006 – 10/2009",
            description: "Performed functional testing for a web application.",
            highlights: []
        }
    ],
    skills: {
        ai: ["Agentic AI", "Vibe Coding", "Claude Code"],
        cloud: ["Azure", "GCP"],
        languages: ["Java", "Python", "JavaScript"],
        frameworks: ["Spring", "NodeJS", "React"],
        data_engineering: [
            "Complex SQL (T-SQL, HiveQL, ANSI SQL)",
            "Hadoop / Hive",
            "Ab Initio",
            "Informatica",
            "SSIS / SSRS / SSAS",
            "Data-pipeline validation, ETL, reconciliation, lineage"
        ],
        databases: {
            sql: ["PostgreSQL", "SQL Server", "BigQuery"],
            nosql: ["MongoDB", "Cosmos DB"]
        },
        platforms: ["Kafka", "Camunda"],
        observability: ["Grafana", "Prometheus", "Looker"],
        soft: [
            "Technical Writing",
            "Cross-functional Collaboration",
            "Strategic Thinking",
            "Problem Solving",
            "Mentoring & Coaching"
        ]
    },
    capabilities: {
        strong: [
            "High-Scale Distributed Systems Troubleshooting",
            "Strategic Planning & Lifecycle Orchestration",
            "Hardware Abstraction & Vendor-Agnostic API Design",
            "Financial Stewardship & ROI Optimization",
            "Engineering Leadership & Team Mentorship",
            "Enterprise-Scale Data Pipeline Validation & Complex SQL"
        ],
        moderate: [
            "Cloud Modernization & Multi-tenant Scaling",
            "Agentic AI & Orchestration Protocols",
            "Data Literacy & Predictive Visualization",
            "Cloud-Native Resilience & Event-Driven Architecture",
            "ML/AI Concepts (LLMs, foundation models, supervised/unsupervised learning, responsible AI — via UT Austin & JHU certifications)"
        ],
        gaps: [
            "Web UI Development",
            "Mobile Development",
            "Experience handling year-end reviews"
        ]
    },
    certifications: [
        {
            year: "2026",
            issuer: "Johns Hopkins University",
            school: "Whiting School of Engineering",
            name: "Certificate Program in AI Business Strategy",
            description: "Foundation models, LLMs, generative AI, AI project management, responsible AI, transparency & explainability, bias mitigation, AI strategy frameworks (R.O.A.D.), data readiness, AI team structures, and operationalization of AI initiatives."
        },
        {
            year: "2024",
            issuer: "The University of Texas at Austin",
            school: "McCombs School of Business",
            name: "PGP-AIML — Post Graduate Program in AI & Machine Learning: Business Applications",
            description: "Python for ML, supervised & unsupervised learning, neural networks, deep learning, computer vision, NLP, model evaluation, and applied capstone projects."
        }
    ],
    education: {
        degree: "BE (Bachelor of Engineering) — Electrical and Electronics",
        school: "Jaya Engineering College, Anna University",
        location: "Chennai, India",
        period: "2001 – 2005"
    },
    philosophy: {
        threeCs: ["Commitment", "Coaching", "Compassion"],
        interests: ["Travelling", "Cycling", "Audio books", "Personal Effectiveness"]
    }
};
