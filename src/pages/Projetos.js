import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import fotoProjeto1 from "../images/ProjetoToDoList.png"
import fotoProjeto2 from "../images/ListInCSharp.png"
import fotoProjeto3 from "../images/Desafios.png"

export default function Projetos() {
  return (
    <div className="grid grid-cols-5 bg-black h-auto">
      <div className="grid col-span-5 place-items-center">
        <h1 className="text-white font-extrabold text-3xl m-5 font-serif">
          PROJETOS
        </h1>
      </div>
      <div className="grid col-span-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: -window.innerWidth }}
        >
          <Card
            text="To Do List: Projeto desenvolvido quando estava iniciando nos estudo de ReactJS. Durante o desenvolvimento aprimorei
            algumas habilidades que já havia utilizado na liguagem. Utilizei do conceito de useState e a função map para criar a e 
            adicionar itens na lista. Também foi utilizado CSS para estilização do site, aprofundando conhecimentos que possui."
            foto={fotoProjeto1}
          />
          <Card
            text="Lista em C#: Projeto feito em C# usando List, para criar um programa que registrasse funcionários e guardasse os ids, 
            nomes, salários e pudesse fazer o aumento do salário do funcionário que fosse identificado pelo id. Projeto desenvolvido
            para reforça os conhecimento de C# sobre listas e construtores."
            foto={fotoProjeto2}
          />
          <Card
            text="Dsafios: Esses desfios foram propostos por uma empresa na qual eu estava fazendo o precesso seletivo. Equanto desenvolvia esses
            desafios, consegui reforçar conhecimentos de lógica de programação. Todos os desafios foram desenvolvidos em JavaScript."
            foto={fotoProjeto3}
          />
        </motion.div>
      </div>
      <div className="grid grid-rows-2">
        <div className="grid place-items-end justify-center mb-2">
          <button
            className="p-2 rounded-lg text-white border border-violet-500 bg-dark hover:bg-indigo-500 hover:border-white hover:rounded-xl"
            type="button"
          >
            <Link to="/">Voltar pro início →</Link>
          </button>
        </div>
        <div className="grid place-items-start justify-center mt-2 relative">
        </div>
      </div>
    </div>
  );
}
