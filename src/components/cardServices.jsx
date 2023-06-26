import React from "react";
import {useState} from "react";

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

 export const Card = ({ title, description, image,p1,p2,p3,p4,p5,p6,p7,p8,p9 }) => {
  const [text, setText] = useState(false);
  const [t,i18n] = useTranslation("global")

  return (
    <div className="flex flex-col border border-black w-full mx-10 md:mx- md:w-1/3 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <div className="flex flex-col justify-between p-4 h-full">
      
      <div>
        <h3 className="text-3xl  font-black text-gray-800 mb-2">{title}  </h3>
        <ul className=" font-light">
          <li><span className="custom-shadow font-bold text-xl text-gray-800"> - </span> {p1}</li>
          <li><span className="custom-shadow  font-bold text-xl text-gray-800"> - </span> {p2}</li>
          <li><span className="custom-shadow  font-bold text-xl text-gray-800"> - </span> {p3}</li>
          <li><span className="custom-shadow  font-bold text-xl text-gray-800"> - </span> {p4}</li>
          <li><span className="custom-shadow  font-bold text-xl text-gray-800"> - </span> {p5}</li>
          <li><span className="custom-shadow  font-bold text-xl text-gray-800"> - </span> {p6}</li>
          <li><span className="custom-shadow  font-bold text-xl text-gray-800"> - </span> {p7}</li>
  



        </ul>
      </div>
      <div className="flex aling-center flex-col">
      <a
          href="#"
          className="mt-4 md:px-32 py-2 text-center font-light  border border-black hover:bg-black hover:text-white  transition-colors duration-300"
        
        >
          Presupuesto 
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Card;
