import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    company: "Aficio AI",
    role: "Software Developer (Contract)",
    period: "Feb 2024 - Jun 2024",
    tech: ["Python", "TypeScript", "Azure", "Docker", "Elasticsearch", "LLM Integrations"],
    achievements: [
      "Engineered ingestion architecture for 100+ unstructured sources, improving pipeline efficiency by 19%.",
      "Deployed containerized services to orchestrate analytics pipelines, boosting performance 33%.",
      "Integrated LLM-powered workflows that cut query latency 25% and sharpened user responses.",
      "Implemented real-time monitoring with Azure Monitor and Elastic Stack, reducing incident resolution time 40%.",
      "Led reviews and pair programming to lower production defects by 12% across Agile sprints."
    ]
  },
  {
    company: "Ministry of Children, Community & Social Services",
    role: "Software Automation Tester",
    period: "Aug 2022 - Aug 2023",
    tech: ["Java", "Selenium", "JMeter", "Azure DevOps", "REST APIs"],
    achievements: [
      "Automated 100+ Selenium test cases, cutting manual regression effort in half.",
      "Upgraded 500+ tests from Java 8 to 17, raising stability and performance by 33%.",
      "Executed JMeter load suites against public-facing APIs to harden reliability under peak demand.",
      "Partnered with QA, engineering, and business stakeholders to accelerate Agile release cycles."
    ]
  },
  {
    company: "Tribunals Ontario",
    role: "System Support Officer (Contract)",
    period: "Jan 2022 - Apr 2022",
    tech: ["Azure", "PowerShell", "Excel", "Asset Management"],
    achievements: [
      "Resolved cross-system incidents while meeting SLAs and raising client satisfaction scores.",
      "Designed Excel dashboards tracking 1,000+ assets, recovering $100K in misallocated equipment.",
      "Configured and deployed hardware and software for 50+ users supporting adjudication services."
    ]
  }
];