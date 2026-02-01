"use client";

import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGEM */}
        <Reveal>
          <div className="flex justify-center md:justify-start">
            <img
              src="/avatareu.png"
              alt="Thiago Simas"
              className="w-64 md:w-80 rounded-full object-cover"
            />
          </div>
        </Reveal>

        {/* TEXTO */}
        <Reveal>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Sobre mim
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Sou <strong>Thiago Simas</strong>, estudante de{" "}
              <strong>Análise e Desenvolvimento de Sistemas</strong>,
              e encontrei na tecnologia uma oportunidade de unir aprendizado
              constante com a criação de soluções reais.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Venho desenvolvendo projetos com <strong>React</strong>,
              <strong> Next.js</strong> e boas práticas de front-end,
              sempre focando em interfaces modernas, responsivas e acessíveis.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Atualmente, busco minha <strong>primeira oportunidade como desenvolvedor</strong>,
              onde eu possa evoluir, aprender com o time e contribuir ativamente.
            </p>

            <a
              href="/Curriculo - Thiago S Oliveira.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
            >
              ⬇ Baixar CV
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";

// export function About() {
//   return (
//     <section
//       id="about"
//       className="bg-slate-950 text-white py-28 px-6"
//     >
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
//         {/* TEXTO */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold">
//             Sobre mim
//           </h2>

//           <p className="text-gray-300 leading-relaxed">
//             Sou <span className="text-blue-400 font-medium">Thiago Simas</span>,
//             estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>,
//             com foco em desenvolvimento Front-end utilizando
//             <strong> React, Next.js e Tailwind CSS</strong>.
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             Tenho paixão por tecnologia e por criar interfaces modernas,
//             acessíveis e responsivas. Estou em constante aprendizado,
//             buscando evoluir tanto na parte técnica quanto na construção de
//             soluções que gerem valor real para as pessoas.
//           </p>

//           <p className="text-gray-400 leading-relaxed">
//             Atualmente, busco minha <strong>primeira oportunidade como
//             desenvolvedor</strong>, onde eu possa crescer, aprender com o time
//             e contribuir de forma ativa nos projetos.
//           </p>
//         </motion.div>

//         {/* BLOCO DESTACADO */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-slate-900 border border-white/10 rounded-2xl p-8 space-y-4"
//         >
//           <h3 className="text-xl font-semibold text-blue-400">
//             Em resumo
//           </h3>

//           <ul className="space-y-3 text-gray-300">
//             <li>🎓 Estudante de ADS</li>
//             <li>💻 Front-end com React e Next.js</li>
//             <li>🎨 Foco em UI moderna e responsiva</li>
//             <li>🚀 Em busca da primeira oportunidade</li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
