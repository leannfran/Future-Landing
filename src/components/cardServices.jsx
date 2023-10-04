import React from "react";
import {useState} from "react";

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

 export const Card = ({ title, description, image,p1,p2,p3,p4,p5,p6,p7,p8,p9 }) => {
  const [text, setText] = useState(false);
  const [t,i18n] = useTranslation("global")

  return (
    <div className="flex flex-col borer border-black w-60 text-white  bg-gradient-to-tr from-primary  to-tres rounded-3xl    overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <div className="flex flex-col bg-gris rounded-2xl m-2 justify-between p-4 h-full">
      
      <div>
        <h3 className="text-xl  font-black text-white mb-2">{title}  </h3>
        <ul className=" font-light">
          <li><span className="custom-shadow font-bold text-lg text-white"> - </span> {p1}</li>
        </ul>
      </div>
      
    </div>
  </div>
  
  );
};

export default Card;
