import React from 'react';
import {useState} from "react";

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
export const CardPartner = ({ title, description, image,p1,p2,p3,p4,p5,p6,p7,p8,p9 }) => {
    const [text, setText] = useState(false);
    const [t,i18n] = useTranslation("global")
  
    return (
      <div className="flex mb-64   shadow-2xl border-black border shadow-primary  bg-cover bg-no-repeat flex-col  w-full md:w-1/2 mx-10 md:mx-4  overflow-hidden hover:border-black transition-shadow duration-500">
      <div className="flex flex-col justify-between p-4 h-full">
        <div>
          <h3 className="text-3xl text-center font-black  mb-2">{title}  </h3>
          <ul className=" font-light">
            <li><span className="custom-shadow  font-bold text-xl"> - </span> {p1}</li>
            <li><span className="custom-shadow  font-bold text-xl"> - </span> {p2}</li>
            <li><span className="custom-shadow  font-bold text-xl"> - </span> {p3}</li>
            <li><span className="custom-shadow  font-bold text-xl"> - </span> {p4}</li>
            <li><span className="custom-shadow  font-bold text-xl"> - </span> {p5}</li>
            <li><span className="custom-shadow  font-bold text-xl"> - </span> {p7}</li>
    
  
  
  
          </ul>
        </div>
        <div className="flex aling-center flex-col">
        <a
            href="#"
            className=" hero bg-cover  mt-4 md:px-32 py-2 text-center font-bold text-xl text-black  border border-black  transition-colors duration-300"
          
          > Consultar Disponibilidad
          </a>
        </div>
      </div>
    </div>
    
    );
  };
  
  export default CardPartner;
  
