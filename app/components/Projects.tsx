"use client";

import { Reveal } from "@/components/Reveal";

const projects = [
  {
    title: "Médicos e Voluntários",
    description:
      "Plataforma focada em conectar profissionais da saúde e voluntários, com interface responsiva e foco social.",
    image: "/medicosvoluntario.jpeg",
    link: "https://github.com/thiagosimaswebdev/medicos-e-dentistas-voluntarios",
  },
  {
    title: "Viva Bem",
    description:
      "Projeto com foco em saúde e bem-estar, abordando conteúdos de saúde masculina e feminina com layout acessível.",
    image: "/vivabem.jpeg",
    link: "https://github.com/thiagosimaswebdev/projeto-viva-bem",
  },
  {
    title: "Pomodoro",
    description:
      "Aplicação de produtividade utilizando a técnica Pomodoro, com foco em organização de tempo e foco.",
    image: "/pomodoro.jpeg",
    link: "https://github.com/thiagosimaswebdev/projeto-pomodoro2",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-900 text-white px-6">
      <div className="max-w-7xl mx-auto">

        {/* TÍTULO */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Projetos em destaque
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Alguns projetos desenvolvidos durante meus estudos e prática em
            front-end, disponíveis no GitHub.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <a
                href={project.link}
                target="_blank"
                className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition block"
              >
                {/* IMAGEM */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* TEXTO */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block text-sm text-blue-400 font-medium">
                    Ver projeto →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* LINK GERAL */}
        <Reveal className="text-center mt-16">
          <a
            href="https://github.com/thiagosimaswebdev"
            target="_blank"
            className="inline-block px-6 py-3 rounded-lg border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition font-medium"
          >
            Ver mais projetos no GitHub
          </a>
        </Reveal>

      </div>
    </section>
  );
}
