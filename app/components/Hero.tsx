"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900
        text-white
        flex items-center
        pt-28 md:pt-32
      "
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <Reveal>
          <div className="space-y-8">

            {/* TAG */}
            <span className="inline-block text-sm md:text-base font-medium text-blue-400">
              👋 Olá, eu sou Thiago
            </span>

            {/* TÍTULO */}
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
              Desenvolvedor Front-end <br />
              <span className="text-blue-400">
                focado em React e Next.js
              </span>
            </h1>

            {/* DESCRIÇÃO */}
            <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
              Sou estudante de ADS e entusiasta de tecnologia, focado em criar
              interfaces modernas, acessíveis e responsivas. Busco minha primeira
              oportunidade como desenvolvedor.
            </p>

            {/* BOTÕES */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                Ver projetos
              </a>

              <a
                href="/Curriculo - Thiago S Oliveira.pdf"
                download
                className="px-7 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition font-medium"
              >
                Baixar CV
              </a>
            </div>

            {/* REDES */}
            <div className="flex gap-6 pt-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Email
              </a>
            </div>
          </div>
        </Reveal>

        {/* IMAGEM */}
        <Reveal>
          <div className="relative flex justify-center md:justify-end">

            {/* Glow */}
            <div className="absolute w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />

            <motion.img
              src="/thiagoavatar2.png"
              alt="Thiago desenvolvedor"
              className="relative z-10 w-72 md:w-96 xl:w-[420px] rounded-full"
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
