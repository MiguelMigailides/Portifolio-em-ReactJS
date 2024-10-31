import React from "react";

import foto from "../images/fotodeperfil3.jpeg";
import fotoExemplo from "../images/imagemExemplo.jpg"

export default function Card(props) { 
  return (
  
      <div className="w-auto h-auto grid grid-cols-1 col-span-3 place-items-center">
        <div className="w-2/4 h-auto bg-white inline-flex items-center rounded-l-xl my-2 p-8">
          <img src={props.foto} className="w-44 h-2/3 rounded-full m-4"></img>
          <p className=" flex justify-items-start text-black">
              {props.text}
          </p>
        </div>
      </div>
  
  );
}
