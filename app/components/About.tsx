import { GraduationCap, Code2, Server } from "lucide-react";

const stats = [
  { label: "LeetCode Problems", value: "400+" },
  { label: "SQL Jobs Migrated", value: "60+" },
  { label: "Maintenance Downtime Reduced", value: "95%" },
  { label: "Hackathons Won", value: "3" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          About <span style={{ color: "var(--accent)" }}>Me</span>
        </h2>
        <div className="w-12 h-0.5 mb-12" style={{ background: "var(--accent)" }} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              I&apos;m a Software Engineer with a strong foundation in backend systems, cloud infrastructure,
              and scalable architecture. I love building things that work reliably at scale — from database
              migrations to full-stack web applications.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Currently interning at <span style={{ color: "var(--accent)" }}>Xperi</span> in Bangalore,
              where I&apos;ve worked on migrating 60+ SQL Server jobs to PostgreSQL on GCP, building CI/CD
              pipelines with Helm & ArgoCD, and engineering data comparison tooling in Go.
            </p>

            {/* Education */}
            <div className="card p-5 flex gap-4">
              <GraduationCap size={22} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                  B.E. Computer Science
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Chitkara University, Punjab
                </p>
                <div className="flex gap-3 mt-2">
                  <span className="badge">Oct 2022 – Jul 2026</span>
                  <span className="badge-accent">CGPA: 9.54</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((s) => (
                <div key={s.label} className="card p-5 text-center">
                  <p className="text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>
                    {s.value}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="card p-5 flex gap-4">
              <Code2 size={22} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                  Strong DSA & Problem Solving
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  400+ LeetCode problems solved with expertise in Data Structures & Algorithms.{" "}
                  <a
                    href="https://leetcode.com/u/9417harshit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--accent)" }}
                  >
                    View Profile →
                  </a>
                </p>
              </div>
            </div>

            <div className="card p-5 flex gap-4 mt-4">
              <Server size={22} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                  Production-Grade Engineering
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  Focus on system resilience, scalability, and clean architecture from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

