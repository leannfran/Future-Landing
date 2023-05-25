import React from 'react';
import { FaBuilding } from 'react-icons/fa';

const CardClients = ({ review }) => {
  return (
    <div className="bg-white p-4 mt-5 mb-5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 flex items-center">
      <img src={review.img} alt={review.name} className="w-32 h-32 rounded-full mr-4 my-auto" />
      <div>
        <h2 className="text-lg font-medium mb-2">{review.name}</h2>
        <p className="text-gray-700">{review.review}</p>
        <a
          href={review.place}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center px-6 py-2 border border-primary bg-white text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
        >
          <FaBuilding className="mr-2 text-current" />
          Visitar sitio web
        </a>
      </div>
    </div>
  );
};

export default CardClients;
