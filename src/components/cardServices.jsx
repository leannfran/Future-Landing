import React from "react";
import {useState} from "react";

import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'

export const Card = ({ title, description, image }) => {
  const [text, setText] = useState(false);
  const [t,i18n] = useTranslation("global")

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img className="w-full md:h-64 object-cover" src={image} alt={title} />
    <div className="flex flex-col justify-between p-4 h-full">
      <div>
        <h3 className="text-lg font-medium mb-2">{title}  </h3>
      </div>
      <div className="flex aling-center flex-col">
      <a
          href="#"
          className="mt-4 md:px-32 py-2 bg-white border border-primary text-primary text-center font-bold rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
        
        >
          {t("buttons.watch_more")}
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Card;
