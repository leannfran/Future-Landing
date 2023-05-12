import React from 'react';

export const Card = ({ title, description, image }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <a
            href="#"
            className="mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-light transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    );
  };

export default Card;
