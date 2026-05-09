export default function Portfolio() {
  const projects = [
    {
      title: "Destinalytics – Travel Analytics Platform (FYP)",
      description:
        "A web-based travel analytics platform that evaluates destinations based on cost, distance, and user preferences. Built with data analytics and business intelligence techniques to generate decision-support insights.",
      tech: ["Laravel", "MySQL", "Data Analytics", "Power BI"],
    },
    {
      title: "NYC DOT Data Warehouse Initiative",
      description:
        "Designed a data warehouse using dimensional modelling for NYC traffic crash data (2021–2022). Built KPIs and dashboards for injuries, fatalities, and contributing factors analysis.",
      tech: ["MySQL", "ETL", "Data Warehousing", "Power BI", "Tableau"],
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
    "Microsoft Office",
    "VS Code",
    "Data Analytics",
  ];

  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold tracking-wide">AHMAD HISYAM</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-b from-indigo-900/30 to-transparent">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Ahmad Nur Hisyam
        </h1>
        <p className="text-gray-300 text-lg">
          Information Technology Student | Web Development | Data Analytics
        </p>
        <p className="text-gray-400 mt-2">
          Gombak, Malaysia | hisyammansor21@gmail.com | 013-597 3136
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-24 pb-20">

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-[1.01] transition">
            <p className="text-gray-300 leading-relaxed">
              Motivated Information Technology student with strong foundations in web development and data analytics. Experienced in Laravel-based systems and data-driven solutions. Passionate about building clean, functional, and impactful applications.
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-4">

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="font-semibold">Bachelor of Information Technology</h3>
              <p className="text-gray-400">IIUM</p>
              <p>CGPA: 3.53</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="font-semibold">Foundation in Engineering & CS</h3>
              <p className="text-gray-400">CFS IIUM</p>
              <p>CGPA: 2.75</p>
            </div>

          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-1 transition">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-xs bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-200">
                      {t}
                    </span>
                  ))}
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
              <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 pt-10">
          © 2026 Ahmad Nur Hisyam. Built with Next.js & Tailwind.
        </footer>

      </div>
    </main>
  );
}
