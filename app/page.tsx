"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Destinalytics – Travel Analytics Platform (FYP)",
      description:
        "A web-based travel analytics platform that evaluates destinations based on cost, distance, and user preferences. Built with data analytics and business intelligence techniques.",
      tech: ["Laravel", "MySQL", "Power BI"],
      image: "/project1.jpg",
    },
    {
      title: "NYC DOT Data Warehouse",
      description:
        "Designed a data warehouse using dimensional modelling for NYC traffic crash data (2021–2022) with KPI dashboards and analysis.",
      tech: ["MySQL", "ETL", "Tableau"],
      image: "/project2.jpg",
    },
  ];

  const skills = [
    "Laravel",
    "HTML",
    "CSS",
    "Java",
    "Python",
    "MySQL",
    "Power BI",
    "Tableau",
    "VS Code",
  ];

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold tracking-wide">AHMAD HISYAM</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-indigo-900/30 to-transparent">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-5xl font-bold mb-4">Ahmad Nur Hisyam</h1>
            <p className="text-gray-300">
              IT Student | Web Development | Data Analytics
            </p>
            <p className="text-gray-400 mt-2">
              Gombak, Malaysia | hisyammansor21@gmail.com
            </p>

            <button className="mt-6 px-5 py-2 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition">
              Download CV
            </button>
          </div>

          {/* PROFILE PICTURE */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl hover:scale-105 transition">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:scale-[1.01] transition">
            Motivated IT student with strong foundations in web development and data analytics. Passionate about building clean and functional systems.
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setActiveProject(i)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition"
              >
                {/* IMAGE */}
                <div className="h-48 bg-black">
                  <img
                    src={p.image}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs bg-indigo-500/20 px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl hover:bg-white/10 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 pt-10">
          © 2026 Ahmad Nur Hisyam | Built with Next.js
        </footer>

      </div>
    </main>
  );
}
