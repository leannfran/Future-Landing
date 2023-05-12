import React from "react";
import { Link } from "react-router-dom";
export const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="flex flex-col justify-between p-4 h-full">
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
      </div>
      <div className="flex aling-center flex-col">
      <a
          href="#"
          className="mt-4 px-32 py-2 bg-primary text-white font-bold rounded-full hover:bg-opacity-70 transition-colors duration-300"
        
        >
          ver mas
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Card;
