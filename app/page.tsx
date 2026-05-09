"use client";

import { useState } from "react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Destinalytics – Travel Analytics Platform (FYP)",
      description:
        "A web-based travel analytics platform that evaluates destinations based on cost, distance, and user preferences.",
      tech: ["Laravel", "MySQL", "Power BI"],
      images: ["/project1.png", "/project1b.jpg"],
      details:
        "Final Year Project focused on travel decision support system using data analytics and visualization dashboards.",
    },
    {
      title: "NYC DOT Data Warehouse",
      description:
        "Designed a data warehouse using dimensional modelling for NYC traffic crash data.",
      tech: ["MySQL", "ETL", "Tableau"],
      images: ["/project2.png", "/project2b.jpg"],
      details:
        "Built ETL pipeline and KPI dashboards to analyze traffic accidents and contributing factors.",
    },
    {
      title: "Tverse – Digital Tutoring Platform (Research)",
      description:
        "Conceptual business model using Design Thinking for a digital tutoring platform.",
      tech: ["Design Thinking", "Research", "UI/UX"],
      pdf: "/tverse-article.pdf",
      details:
        "Published research in IIUM Journal under technopreneurship subject.",
    },
    {
      title: "Smart Data Analytics Research Unit – Client Project",
      description:
        "Website redesign proposal for KICT research unit.",
      tech: ["UI/UX", "Requirement Analysis", "Project Management"],
      images: ["/sda1.jpg", "/sda2.jpg"],
      details:
        "Worked with Prof. Ts. Dr. Mira Kartiwi on real client requirements.",
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
  ];

  const activeProject =
    selectedProject !== null ? projects[selectedProject] : null;

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white font-sans">

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">

        {/* glowing background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div className="animate-[fadeUp_0.8s_ease-out]">
            <h1 className="text-5xl font-bold mb-4">
              Ahmad Nur Hisyam
            </h1>

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

          <div className="flex justify-center animate-[fadeIn_1.2s_ease-out]">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
              <img
                src="/Profile.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

        {/* ABOUT */}
        <section>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
            <p className="text-gray-300 leading-relaxed">
              Motivated Information Technology student with strong foundation in web development and data analytics. Experienced in Laravel, MySQL, and data-driven solutions with strong problem-solving skills and teamwork ability.
            </p>
          </div>
        </section>

        {/* AWARDS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Awards & Achievements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold">Dean’s List</h3>
              <p className="text-gray-300 text-sm mt-2">
                Multiple semesters (IIUM)
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold">Bronze Award – FYP</h3>
              <p className="text-gray-300 text-sm mt-2">
                Destinalytics Project
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h3 className="font-semibold">CCNA Certification</h3>
              <p className="text-gray-300 text-sm mt-2">
                Cisco Networking Academy
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedProject(i)}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition"
              >
                {p.images && (
                  <div className="h-48 flex overflow-x-auto gap-2">
                    {p.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        className="h-full w-64 object-cover flex-shrink-0 rounded-lg"
                      />
                    ))}
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span
                key={i}
                className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>

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

            {/* IMAGES */}
            {activeProject.images && (
              <div className="flex overflow-x-auto gap-2 mb-4">
                {activeProject.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    className="h-56 w-full object-cover rounded-xl flex-shrink-0"
                  />
                ))}
              </div>
            )}

            <h2 className="text-2xl font-bold mb-2">
              {activeProject.title}
            </h2>

            <p className="text-gray-300 mb-4">
              {activeProject.details}
            </p>

            <div className="flex flex-wrap gap-2">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-indigo-500/20 text-indigo-200 px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* PDF */}
            {activeProject.pdf && (
              <a
                href={activeProject.pdf}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-indigo-500 rounded-xl hover:bg-indigo-600 transition"
              >
                View Research Paper (PDF)
              </a>
            )}

          </div>
        </div>
      )}

    </main>
  );
}