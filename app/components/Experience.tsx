import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Xperi",
    role: "Software Engineer Intern",
    location: "Bangalore, India",
    type: "On-site",
    period: "August 2025 – Present",
    bullets: [
      "Migrated 60+ SQL Server jobs and schemas to PostgreSQL on GCP, improving system resilience and cost efficiency.",
      "Developed migration scripts in Python and built a data comparison tool in GoLang to ensure data integrity during transitions.",
      "Optimized SQL Server queries and ETL workflows; cloud migration resulted in a 95% reduction in scheduled maintenance downtime.",
      "Automated resilient CI/CD rollouts using Helm charts and ArgoCD for containerized microservices on Kubernetes.",
    ],
    tech: ["Python", "GoLang", "PostgreSQL", "GCP", "Kubernetes", "Helm", "ArgoCD", "SQL Server"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Work <span style={{ color: "var(--accent)" }}>Experience</span>
        </h2>
        <div className="w-12 h-0.5 mb-12" style={{ background: "var(--accent)" }} />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center"
                  style={{ background: "var(--surface2)", border: "2px solid var(--accent)" }}
                >
                  <Briefcase size={16} style={{ color: "var(--accent)" }} />
                </div>

                <div className="card p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                        {exp.role}
                      </h3>
                      <p className="font-medium" style={{ color: "var(--accent)" }}>
                        {exp.company}
                      </p>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {exp.location} · {exp.type}
                      </p>
                    </div>
                    <span className="badge self-start whitespace-nowrap">{exp.period}</span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--accent)", marginTop: "2px" }}>▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

