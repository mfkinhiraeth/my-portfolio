"use client";

import { useState } from "react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Destinalytics – Travel Analytics Platform (FYP)",
      description:
        "A web-based travel analytics platform that evaluates destinations based on cost, distance, and user preferences. Built with data analytics and business intelligence techniques.",
      tech: ["Laravel", "MySQL", "Power BI"],
      images: ["project1.jpg", "/project1b.jpg"],
      details:
        "Final Year Project focused on travel decision support system using data analytics, filtering algorithms, and visualization dashboards.",
    },
    {
      title: "NYC DOT Data Warehouse",
      description:
        "Designed a data warehouse using dimensional modelling for NYC traffic crash data (2021–2022).",
      tech: ["MySQL", "ETL", "Tableau"],
      images: ["project2.jpg", "/project2b.jpg"],
      details:
        "Built ETL pipeline and KPI dashboards to analyze traffic accidents, injuries, fatalities, and contributing factors.",
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

  const activeProject = selectedProject !== null ? projects[selectedProject] : null;

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold tracking-wide">AHMAD NUR HISYAM</h1>
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

          <div>
            <h1 className="text-5xl font-bold mb-4">Ahmad Nur Hisyam</h1>
            <p className="text-gray-300">
              Information Technology Student | Web Development | Data Analytics
            </p>
            <p className="text-gray-400 mt-2">
              Gombak, Malaysia | hisyammansor21@gmail.com
            </p>

            <button className="mt-6 px-5 py-2 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition">
              Download CV
            </button>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
              <img src="Profile.jpg" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

        {/* ABOUT */}
        <section id="about">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-gray-300 leading-relaxed">
              Motivated Information Technology student with a strong foundation in web application development and data analytics. Experienced in building full-stack projects using Laravel and developing data-driven solutions. Possesses strong problem-solving skills, attention to detail, and the ability to work effectively in team environments. Eager to apply technical skills and grow in a dynamic IT field.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(i)}
                className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition"
              >

                {/* MULTIPLE IMAGES */}
                <div className="h-48 flex overflow-x-auto">
                  {p.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="w-full object-cover"
                    />
                  ))}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
            <div className="bg-[#111827] max-w-2xl w-full rounded-2xl p-6 border border-white/10 relative">

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-4 text-white text-xl"
              >
                ✕
              </button>

              {/* IMAGE GALLERY */}
              <div className="flex overflow-x-auto gap-2 mb-4">
                {activeProject.images.map((img, i) => (
                  <img key={i} src={img} className="w-full h-56 object-cover rounded-xl" />
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-2">{activeProject.title}</h2>
              <p className="text-gray-300 mb-4">{activeProject.details}</p>

              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t, i) => (
                  <span key={i} className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
                {s}
              </span>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
