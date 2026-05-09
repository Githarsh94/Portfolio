"use client";
import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    name: "JalJira",
    tagline: "Agile Project Management System",
    period: "Feb 2026 – Present",
    status: "Live",
    description:
      "Architected a scalable platform with OAuth2/OIDC and RBAC (Admin/Manager/Member), featuring high-performance hierarchical task tracking via materialized paths for optimized recursive queries. Engineered a Junior Dev Agent to resolve minor issues utilizing MCP for tool execution and RAG via pgvector for context.",
    tech: ["Next.js", "Tailwind CSS", "Spring Boot 4", "Spring AI", "MCP", "LLMs", "PostgreSQL", "Supabase", "pgvector"],
    github: "https://github.com/Githarsh94/jaljira",
    image: "/jaljira.png",
  },
  {
    name: "Ampskill",
    tagline: "Online Assessment Platform",
    period: "Aug 2024 – Jan 2025",
    status: "Completed",
    description:
      "Built a scalable online testing platform using analytics and AI to improve academic performance. Focused on backend architecture with AI-powered question generation.",
    tech: ["Next.js", "Node.js", "Express", "MongoDB", "Gemini API"],
    github: "https://github.com/Githarsh94/ampskill",
    image: "/ampskill.png",
  },
  {
    name: "KMS Connect App",
    tagline: "Community App (App Store & Play Store)",
    period: "Jul 2023 – Sep 2023",
    status: "Shipped",
    description:
      "Developed a community app using React Native (Expo), Supabase, and TypeScript, plus an admin panel in Next.js. Implemented directory, donation management (Razorpay/UPI), and loan workflows with document upload and admin approval.",
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "Next.js", "Razorpay"],
    github: "https://github.com/Githarsh94",
    image: "/kms-connect.png",
  },
];

const statusColors: Record<string, string> = {
  Live: "#3fb950",
  Completed: "#58a6ff",
  Shipped: "#d2a8ff",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Featured <span style={{ color: "var(--accent)" }}>Projects</span>
        </h2>
        <div className="w-12 h-0.5 mb-12" style={{ background: "var(--accent)" }} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="card p-6 flex flex-col gap-4 overflow-hidden">
              {p.image && (
                <div className="w-full bg-gray-100 dark:bg-gray-900 rounded-lg flex items-center justify-center min-h-64">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-w-[85%] max-h-60 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold" style={{ color: "var(--text-primary)" }}>
                    {p.name}
                  </h3>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                    {p.tagline}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    background: `${statusColors[p.status]}22`,
                    color: statusColors[p.status],
                    border: `1px solid ${statusColors[p.status]}55`,
                  }}
                >
                  {p.status}
                </span>
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{p.period}</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")}
                >
                  <GitFork size={14} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/Githarsh94"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: "var(--accent)" }}
          >
            View all projects on GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}




