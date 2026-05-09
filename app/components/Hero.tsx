"use client";
import { GitFork, Link2, Mail, ArrowDown, Code } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Backend Developer",
  "Full Stack Engineer",
  "Cloud & DevOps Enthusiast",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 40%, rgba(88,166,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p
          className="text-sm font-mono mb-4 animate-fade-in-up"
          style={{ color: "var(--accent)" }}
        >
          Hi there, I&apos;m
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up delay-100"
          style={{ color: "var(--text-primary)" }}
        >
          Harshit Sharma
        </h1>

        <div
          className="text-xl md:text-2xl font-mono mb-6 h-8 animate-fade-in-up delay-200"
          style={{ color: "var(--accent)" }}
        >
          {displayed}
          <span className="cursor-blink">|</span>
        </div>

        <p
          className="text-base md:text-lg mb-10 max-w-xl mx-auto animate-fade-in-up delay-300"
          style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}
        >
          Software Engineer specializing in database migration, cloud infrastructure, and scalable
          system design. Building production-grade applications with modern web technologies.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up delay-400">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium text-sm transition-all"
            style={{ background: "var(--accent)", color: "#0d1117" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg font-medium text-sm transition-all"
            style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
            }}
          >
            View Projects
          </a>
        </div>

        <div className="flex items-center justify-center gap-5 mt-8 animate-fade-in-up delay-500">
          {[
            { href: "https://github.com/Githarsh94", icon: <GitFork size={20} />, label: "GitHub" },
            {
              href: "https://www.linkedin.com/in/harshit-sharma-5b1002168/",
              icon: <Link2 size={20} />,
              label: "LinkedIn",
            },
            {
              href: "https://leetcode.com/u/9417harshit/",
              icon: <Code size={20} />,
              label: "LeetCode",
            },
            { href: "mailto:9417harshit@gmail.com", icon: <Mail size={20} />, label: "Email" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="transition-all"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--text-secondary)")
              }
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: "var(--text-secondary)" }}
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}



