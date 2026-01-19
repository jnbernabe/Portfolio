import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    company: "Aficio AI",
    role: "Software Developer",
    period: "Feb 2024 - Dec 2025",
    tech: ["Python", "Azure", "Docker", "Elasticsearch", "LLM Integrations"],
    achievements: [
      "Built observability dashboards to visualize system performance metrics, enabling stakeholders to identify bottlenecks.",
      "Developed Python scripts to automate data ingestion from 100+ unstructured sources, optimizing data throughput by 19%.",
      "Reduced query latency by 25% by integrating ML components into analytics workflows.",
      "Collaborated with engineering teams to document operational procedures and ensure reproducible, well-monitored codebases."
    ]
  },
  {
    company: "Ministry of Children, Community & Social Services",
    role: "Software Automation Tester",
    period: "Aug 2022 - Aug 2023",
    tech: ["Java", "Selenium", "JMeter", "Azure DevOps", "REST APIs"],
    achievements: [
      "Enhanced system observability by developing scripts for structured logging and data validation, improving traceability.",
      "Designed and executed automated validation scripts against REST APIs, functioning as synthetic monitoring.",
      "Participated in root-cause analysis of software defects, documenting findings to resolve integration issues."
    ]
  },
  {
    company: "Tribunals Ontario",
    role: "System Support Officer",
    period: "Jan 2022 - Apr 2022",
    tech: ["Azure", "PowerShell", "Excel", "Asset Management"],
    achievements: [
      "Created analytics dashboards to track the status of 1,000+ assets, providing senior leadership with clear visibility.",
      "Automated data workflows to reduce manual toil, identifying patterns that led to $100,000 in asset recovery."
    ]
  },
  {
    company: "Griffith Foods",
    role: "Quality Assurance Technician",
    period: "Jan 2021 - Aug 2021",
    tech: ["Data Analysis", "Validation", "Regulatory Compliance"],
    achievements: [
      "Conducted detailed data investigations and validation to ensure regulatory compliance.",
      "Maintained technical documentation and operational standards in a fast-paced production environment."
    ]
  }
];