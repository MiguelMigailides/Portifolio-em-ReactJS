import React from "react";

import foto from "../images/fotodeperfil3.jpeg";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";


export default function Sidebar() {
  return (
    <div className=" h-screen w-auto">
      <div className="inline-flex h-full flex-col justify-center bg-black">
        <div className="flex flex-col items-center ">
          <img className="rounded-full w-auto h-52 mx-4 " src={foto}></img>
          <p className="text-1xl text-white font-serif mt-4">
            Desenvolvedor Full Stack
          </p>
        </div>

        <div className=" flex flex-col my-24">
          <Link
            to="/"
            className="text-black font-mono font-bold text-lg pl-2 my-3 mx-4 bg-cyan-100 rounded-xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-md hover:shadow-gray-200"
          >
            Início
          </Link>
          <Link
            to="/Perfil"
            className="text-black font-mono font-bold text-lg pl-2 my-3 mx-4 bg-cyan-100 rounded-xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-md hover:shadow-gray-200"
          >
            Perfil
          </Link>
          <Link
            to="/Projetos"
            className="text-black font-mono font-bold text-lg pl-2 my-3 mx-4 bg-cyan-100 rounded-xl shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-md hover:shadow-gray-200"
          >
            Projetos
          </Link>
        </div>
        <div className="flex flex-col">
          <button type="submit" style={{ height: 40 }}>
            <a
              className="text-white font-bold ring-2 focus:ring-offset-2 rounded-lg p-2 bg-violet-950"
              href="https://drive.google.com/file/d/1TUYFUEtfp5-VkDKjqaiOfLPcAfNX6sYE/view?usp=drive_link"
            >
              Currículo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
