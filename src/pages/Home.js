import React from "react";

import Sidebar from "../components/Sidebar";
import { MaquinaDeEscrever } from "../components/MaquinaDeEscrever";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="inline-flex bg-black h-auto w-screen">
      <Sidebar />
      <div className="flex flex-col items-center justify-start w-screen">
        <h1 className="text-white text-7xl my-14 mb-2 font-extrabold font-mono">
          <MaquinaDeEscrever text="Olá, " esconderCursor />{" "}
        </h1>
        <p className="text-white text-xl text-start font-mono">
          <MaquinaDeEscrever
            text="Eu sou Miguel Migailides."
            delay={1000}
            esconderCursor
          />
        </p>
        <p className="text-white text-xl text-start font-mono">
          <MaquinaDeEscrever
            text="Seja bem-vindo ao meu site!"
            delay={3900}
            esconderCursor
          />
        </p>
        <div className="mt-64">
          <button className="">
            <Link to="/Perfil"
              className="text-2xl 
              font-extrabold 
              bg-gradient-to-r 
              from-indigo-500 
              to-fuchsia-500
              bg-clip-text
              text-transparent 
              rounded-full 
              p-5
              hover:from-blue-500"
            >
              VAMOS LÁ ➜
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
