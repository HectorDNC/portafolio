"use client";
import { useState } from "react";
import Footer from "./Footer";

const contactInfo = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Email",
    value: "hector.noguera03@gmail.com",
    href: "mailto:hector.noguera03@gmail.com",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    label: "Teléfono",
    value: "+58 4125365957",
    href: "https://wa.me/584125365957?text=Hola,%20vi%20tu%20portfolio%20web%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad%20laboral/colaboraci%C3%B3n.%20%C2%BFTienes%20disponibilidad?",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
        />
      </svg>
        ),
        label: "LinkedIn",
        value: "linkedin.com/in/hector-noguera-c",
        href: "https://www.linkedin.com/in/hector-noguera-c/",
      },
      {
        icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 .296a12 12 0 00-3.793 23.412c.6.111.82-.261.82-.58 0-.287-.01-1.047-.015-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.666-.304-5.466-1.333-5.466-5.931 0-1.309.468-2.379 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.5 11.5 0 016.004 0c2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.243 2.874.12 3.176.77.842 1.234 1.912 1.234 3.221 0 4.61-2.804 5.624-5.476 5.921.43.372.815 1.1.815 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.697.825.579A12 12 0 0012 .296z"
          clipRule="evenodd"
        />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/HectorDNC",
    href: "https://github.com/HectorDNC",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative pt-20 pb-10 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">
            Hablemos
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            Contacto
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Cuéntame tu idea y construyamos algo
            increíble juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-6 gap-12 items-center">
          {/* Contact info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-white font-semibold text-xl">
              Información de contacto
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Estoy disponible para proyectos freelance, colaboraciones y
              posiciones full-time. No dudes en escribirme.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-dark rounded-xl group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/30 transition-colors flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-0.5">{label}</p>
                    <p className="text-white text-sm font-medium">{value}</p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="text-white/20 ml-auto group-hover:text-white/50 transition-colors"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <p className="text-green-300 text-sm">
                Disponible para nuevos proyectos
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 hidden">
            <form
              onSubmit={handleSubmit}
              className="card-dark rounded-2xl p-8 flex flex-col gap-5"
            >
              {sent && (
                <div className="flex items-center gap-3 bg-blue-600/20 border border-blue-500/30 rounded-xl p-4 text-blue-300 text-sm">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  ¡Mensaje enviado! Me pondré en contacto pronto.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-medium uppercase tracking-wide">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="input-dark rounded-xl px-4 py-3 text-sm placeholder:text-white/20"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-white/50 text-xs font-medium uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="input-dark rounded-xl px-4 py-3 text-sm placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs font-medium uppercase tracking-wide">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="input-dark rounded-xl px-4 py-3 text-sm placeholder:text-white/20 resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 text-sm flex items-center justify-center gap-2"
              >
                Enviar Mensaje
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}
