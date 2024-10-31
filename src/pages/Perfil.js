import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import foto from "../images/FotoDePerfil4.jpeg";
import Card from "../components/Card";

export default function Perfil() {
  return (
    <div className="grid col-4 h-screen w-screen bg-black">
        <motion.div
             initial={{ width: 0 }}
             animate={{ width: "100%" }}
             exit={{ x: -window.innerWidth }}
        >
      <div className="grid mt-20">
        <Card
          text="Estudante de Ciência da Computação | 6º Período
Atualmente cursando o 6º período de Ciência da Computação, com foco em desenvolvimento e programação. Nos últimos dois anos, dediquei-me integralmente aos estudos acadêmicos, buscando absorver ao máximo os conteúdos oferecidos pela universidade, além de participar de projetos paralelos que complementassem minha formação técnica e prática.
Com um perfil analítico e pró-ativo, valorizo o trabalho em equipe e tenho como prioridade a entrega de resultados consistentes e eficientes. Minha capacidade de adaptação e aprendizado contínuo me permitem enfrentar novos desafios com determinação, sempre buscando aprimorar minhas habilidades.
Estou em busca de oportunidades que me permitam aplicar o conhecimento adquirido, desenvolver novas competências e contribuir para o sucesso da empresa com comprometimento, dedicação e uma visão orientada a soluções."
          foto={foto}
        />
      </div>
      </motion.div>
      <div className="grid place-items-center">
        <div className="grid mb-2">
          <button
            className="p-2 rounded-lg text-white border border-violet-500 bg-dark hover:bg-indigo-500 hover:border-white hover:rounded-xl"
            type="button"
          >
            <Link to="/Projetos">Próxima →</Link>
          </button>
        </div>
        <div className="grid mt-2">
          <button
            className="p-2 rounded-lg text-white border border-violet-500 bg-dark hover:bg-indigo-500 hover:border-white hover:rounded-xl"
            type="button"
          >
            <Link to="/">← Voltar</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
