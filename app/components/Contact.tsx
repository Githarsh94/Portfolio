import { Mail, GitFork, Link2, Code } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "9417harshit@gmail.com",
    href: "mailto:9417harshit@gmail.com",
  },
  {
    icon: <GitFork size={20} />,
    label: "GitHub",
    value: "Githarsh94",
    href: "https://github.com/Githarsh94",
  },
  {
    icon: <Link2 size={20} />,
    label: "LinkedIn",
    value: "Harshit Sharma",
    href: "https://linkedin.com/in/harshit-sharma",
  },
  {
    icon: <Code size={20} />,
    label: "LeetCode",
    value: "400+ Problems Solved",
    href: "https://leetcode.com/u/harshit_sharma0/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          Get In <span style={{ color: "var(--accent)" }}>Touch</span>
        </h2>
        <div className="w-12 h-0.5 mb-6 mx-auto" style={{ background: "var(--accent)" }} />
        <p className="text-base mb-12" style={{ color: "var(--text-secondary)" }}>
          Open to new opportunities, collaborations, or just a chat about tech. Reach out through
          any of the channels below!
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 flex items-center gap-4 text-left transition-all group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
              >
                {c.icon}
              </div>
              <div>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {c.label}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



