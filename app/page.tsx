export default function Portfolio() {
  const projects = [
    {
      title: "Petopia",
      description:
        "A service-based eCommerce project offering cat hotel and spa services with booking features and user-friendly interfaces.",
      tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    },
    {
      title: "Ikhwah Library Management System",
      description:
        "A Laravel-based library system with borrowing, returning, room reservation, fines, and membership features.",
      tech: ["Laravel", "Blade", "MySQL", "CSS"],
    },
    {
      title: "NYC Collision Data Warehouse",
      description:
        "Built a data warehouse using SSIS and dimensional modelling for collision analytics and reporting.",
      tech: ["SSIS", "SQL Server", "ETL", "Data Warehousing"],
    },
  ];

  const skills = [
    "Laravel",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "PHP",
    "Data Warehousing",
    "SSIS",
    "Microsoft Excel",
    "Cybersecurity Basics",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <p className="text-blue-400 font-semibold tracking-wide uppercase mb-3">
              Portfolio Website
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm Ahmad Nur Hisyam
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              A Computer Science student passionate about web development,
              analytics, and system development. I enjoy building functional
              applications with clean UI and solving real-world problems through
              technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-2xl font-medium shadow-lg"
              >
                View Projects
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="border border-slate-600 hover:border-white px-6 py-3 rounded-2xl transition"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-300 p-1 shadow-2xl">
              <img
                src="/Profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 shadow-xl">
            <p className="text-slate-300 leading-relaxed text-lg">
              I am currently pursuing a Bachelor in Computer Science and have
              worked on multiple academic and real-client projects involving web
              development, system design, analytics, and databases. I am
              interested in software engineering, UI/UX, and modern web
              technologies.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-2xl shadow-md hover:scale-105 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl hover:-translate-y-2 transition"
              >
                <div className="h-40 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 mb-6 flex items-center justify-center text-3xl font-bold text-blue-300">
                  {project.title.charAt(0)}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-xl text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">
              Bachelor of Computer Science
            </h3>

            <p className="text-slate-400 mb-4">
              International Islamic University Malaysia (IIUM)
            </p>

            <p className="text-slate-300">
              Dean's List recipient multiple times with strong interest in
              software engineering and analytics.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>

            <p className="text-lg mb-8 text-white/90">
              Feel free to reach out for internships, collaborations, or project
              opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:your-email@example.com"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Email Me
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-slate-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
