import React from "react";
import {useState} from "react";

import { Link } from "react-router-dom";
export const Card = ({ title, description, image }) => {
  const [text, setText] = useState(false);
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
    <img className="w-full md:h-64 object-cover" src={image} alt={title} />
    <div className="flex flex-col justify-between p-4 h-full">
      <div>
        <h3 className="text-lg font-medium mb-2">{title}  </h3>
        <p className=" hidden md:inline-block text-gray-600 mb-2">{description}</p>
      </div>
      <div className="flex aling-center flex-col">
      <a
          href="#"
          className="mt-4 md:px-32 py-2 bg-white border border-primary text-primary text-center font-bold rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
        
        >
          ver mas
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Card;
