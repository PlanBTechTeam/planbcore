import { useEffect, useState } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "vision", label: "Vision" },
    { id: "goals", label: "Goals" },
    { id: "community", label: "Community" },
    { id: "contributors", label: "Contributors" },
    { id: "tech", label: "Tech" },
    { id: "license", label: "License" },
    { id: "contact", label: "Stay Connected" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrollY > 30 ? "backdrop-blur-md bg-black/40" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="font-semibold text-lg text-white">🌍 PlanBCore</span>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6">🌍 PlanBCore</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <img src="https://img.shields.io/badge/status-pre--release-yellow" alt="status" />
          <img src="https://img.shields.io/badge/license-MIT%2FApache--2.0-blue" alt="license" />
          <img src="https://img.shields.io/badge/contributions-welcome-brightgreen" alt="contributions" />
          <img src="https://img.shields.io/github/stars/PlanBTechTeam/planbcore?style=social" alt="stars" />
          <img src="https://img.shields.io/github/forks/PlanBTechTeam/planbcore?style=social" alt="forks" />
        </div>
        <p className="text-lg text-gray-400 max-w-2xl">
          PlanBCore is an <b>open-source project</b> to build a modern platform for{" "}
          <b>server management and automation</b>.  
          Our goal: a <b>centralized, secure, accessible</b> solution, developed with the global community.
        </p>
      </section>

      {/* Vision */}
      <section id="vision" className="py-28 px-6 bg-black border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-8">✨ Vision</h2>
          <ul className="text-lg text-gray-400 leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
            <li>✔️ <b>Reliable</b>, suitable for production environments.</li>
            <li>✔️ <b>Flexible</b>, enabling evolution and integrations.</li>
            <li>✔️ <b>Collaborative</b>, open to contributions worldwide.</li>
          </ul>
        </div>
      </section>

      {/* Goals */}
      <section id="goals" className="py-28 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-white mb-12">🎯 Version 1.0 Goals</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 text-left text-gray-300">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-3">Area</th>
                  <th className="px-6 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🔑 Authentication</td>
                  <td>User registration and login with secure tokens.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🤖 Agent</td>
                  <td>Go binary installable on servers (VPS/local).</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🔗 Communication</td>
                  <td>API ↔ Agent channel with heartbeat/status.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🖥️ Dashboard</td>
                  <td>Initial interface for login and agent management.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🗄️ Database</td>
                  <td>PostgreSQL for storing users, agents, and logs.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">⚡ Basic Actions</td>
                  <td>Execution of simple commands (ping, status, etc.).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-12">🤝 Community & Contribution</h2>
          <p className="text-lg text-gray-400 mb-8">
            PlanBCore is a collaborative initiative currently supported by:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-white/10 bg-white/5">
              <img src="https://avatars.githubusercontent.com/u/000000?v=4" alt="PlanBTech" className="w-16 h-16 mb-3" />
              <p><a href="https://github.com/PlanBTechTeam" className="text-white hover:underline">PlanBTech</a> – Founding contributor</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/5">
              <img src="https://avatars.githubusercontent.com/u/000000?v=4" alt="Hublast" className="w-16 h-16 mb-3" />
              <p><a href="https://github.com/hublast" className="text-white hover:underline">Hublast</a> – Founding contributor</p>
            </div>
          </div>
          <p className="mt-8 text-gray-400">Contribute via Issues, Pull Requests, or our future CONTRIBUTING.md</p>
        </div>
      </section>

      {/* Contributors */}
      <section id="contributors" className="py-28 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-12">👥 Contributors</h2>
          <p className="text-gray-400 mb-8">This section will expand with all-contributors soon.</p>
          <div className="flex justify-center gap-12">
            <a href="https://github.com/PlanBTechTeam" className="text-center">
              <img src="https://avatars.githubusercontent.com/u/000000?v=4" alt="PlanBTech" className="w-24 h-24 mb-2" />
              <p className="text-white">PlanBTech</p>
            </a>
            <a href="https://github.com/hublast" className="text-center">
              <img src="https://avatars.githubusercontent.com/u/000000?v=4" alt="Hublast" className="w-24 h-24 mb-2" />
              <p className="text-white">Hublast</p>
            </a>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="tech" className="py-28 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-white mb-12">🛠️ Core Technologies</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 text-left text-gray-300">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-3">Logo</th>
                  <th className="px-6 py-3">Technology</th>
                  <th className="px-6 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🐹</td>
                  <td>Go</td>
                  <td>Core API and Agent</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">⚛️</td>
                  <td>React (Vite)</td>
                  <td>Web Dashboard</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🐘</td>
                  <td>PostgreSQL</td>
                  <td>Relational Database</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-6 py-4">🐳</td>
                  <td>Docker</td>
                  <td>Packaging & Development</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* License */}
      <section id="license" className="py-28 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-white mb-12">🌐 License</h2>
          <p className="text-lg text-gray-400">
            PlanBCore will be released under a permissive license (MIT/Apache 2.0 TBD).
          </p>
        </div>
      </section>

      {/* Stay Connected */}
      <footer id="contact" className="py-20 border-t border-white/10 text-center bg-black">
        <h2 className="text-3xl font-semibold text-white mb-6">📢 Stay Connected</h2>
        <p className="text-gray-400 mb-8">
          ⭐ Star this repo • 🔔 Follow releases • 💬 Community channels coming soon
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://github.com/PlanBTechTeam/planbcore"
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <span className="text-gray-600">Discord (soon)</span>
          <span className="text-gray-600">Slack (soon)</span>
        </div>
        <p className="text-gray-500 text-sm">Made with ❤️ by the community</p>
      </footer>
    </div>
  );
}
