"use client";

const skillGroups = [
  {
    title: "Programming Languages",
    color: "#58a6ff",
    skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "Go", "SQL"],
  },
  {
    title: "Backend & Databases",
    color: "#3fb950",
    skills: [
      "Flask", "Node.js", "Express", "Spring Boot", "REST APIs",
      "PostgreSQL", "MySQL", "MongoDB", "Database Migration", "Scalability",
    ],
  },
  {
    title: "AI / ML",
    color: "#d2a8ff",
    skills: ["LLMs", "Spring AI", "Gemini API", "RAG", "pgvector", "MCP"],
  },
  {
    title: "Cloud & DevOps",
    color: "#ffa657",
    skills: ["GCP", "Kubernetes", "Docker", "Helm Charts", "ArgoCD", "CI/CD", "Linux"],
  },
  {
    title: "Web Development",
    color: "#58a6ff",
    skills: ["React", "Next.js", "React Native", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Tools & Platforms",
    color: "#3fb950",
    skills: ["Git", "GitHub", "Vercel", "Render", "Supabase", "Razorpay"],
  },
  {
    title: "Core CS",
    color: "#8b949e",
    skills: [
      "Data Structures & Algorithms", "Databases", "Operating Systems",
      "Computer Networks", "OOP", "System Design",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Skills & <span style={{ color: "var(--accent)" }}>Technologies</span>
        </h2>
        <div className="w-12 h-0.5 mb-12" style={{ background: "var(--accent)" }} />

        <div className="flex flex-col gap-6">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: group.color }}
              >
                {group.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="badge transition-all cursor-default"
                    style={{ fontSize: "0.82rem", padding: "5px 12px" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = group.color;
                      (e.currentTarget as HTMLElement).style.color = group.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                      (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LeetCode callout */}
        <div
          className="mt-12 p-5 rounded-xl flex items-center gap-4"
          style={{ background: "var(--surface2)", border: "1px solid var(--border)" }}
        >
          <div
            className="text-2xl font-bold"
            style={{ color: "var(--accent)" }}
          >
            400+
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
              LeetCode Problems Solved
            </p>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Strong DSA skills with consistent competitive programming practice.{" "}
              <a
                href="https://leetcode.com/u/9417harshit/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)" }}
              >
                View LeetCode →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


