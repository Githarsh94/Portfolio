import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Byte Tourney Hackathon",
    award: "Winner – Student Developer",
    date: "Feb 2024",
    color: "#ffa657",
    points: [
      "Built and presented a full-stack solution under strict time constraints.",
      "Applied Agile principles to deliver a working prototype in a high-pressure environment.",
    ],
  },
  {
    title: "Electrothon 6.0",
    award: "Track Prize Recipient",
    date: "Mar 2024",
    color: "#d2a8ff",
    points: [
      "Built an app generating dynamic video clips from textual prompts.",
      "Won track prize for best use of Taipy among 100+ teams.",
    ],
  },
  {
    title: "ShopClues Smart Cataloging Hackathon",
    award: "Winner – Student Developer",
    date: "Mar 2024",
    color: "#3fb950",
    points: [
      "Built a cataloging system reducing product listing time by 50%.",
      "Selected top 10 teams for live demo.",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
          <span style={{ color: "var(--accent)" }}>Achievements</span>
        </h2>
        <div className="w-12 h-0.5 mb-12" style={{ background: "var(--accent)" }} />

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div key={a.title} className="card p-6 flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: `${a.color}22`, border: `1px solid ${a.color}55` }}
              >
                <Trophy size={18} style={{ color: a.color }} />
              </div>
              <div>
                <h3 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                  {a.title}
                </h3>
                <p className="text-xs mt-0.5 font-medium" style={{ color: a.color }}>
                  {a.award}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>
                  {a.date}
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {a.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: a.color }}>▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hobbies */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--text-primary)" }}>
            Beyond Code
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                emoji: "🔧",
                title: "Tinkering with Electronics",
                desc: "Passionate about diagnosing and repairing consumer electronics — hands-on problem-solving meets systems knowledge.",
              },
              {
                emoji: "🛼",
                title: "Inline Roller Skating",
                desc: "Practice skating for creativity and relaxation. District Champion (Under 14).",
              },
            ].map((h) => (
              <div key={h.title} className="card p-5 flex gap-4">
                <span className="text-2xl">{h.emoji}</span>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
                    {h.title}
                  </p>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

