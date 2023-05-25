import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
const TeamCard = ({ name, position, imageUrl, Linkedin, Portofilo }) => {
  return (
    <div className="">
      <div className="flex justify-center py-8">
        <img
          src={imageUrl}
          alt={name}
          lazyload="true"
          className="rounded-full w-32 h-32 object-contain ring-4 ring-gray-300"
        />
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <h3 className="font-semibold text-xl">
          {name}
        </h3>
        <p className="text-gray-600 ">
          {position}
        </p>
        <div className="flex items-center">
          <a
            href={Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
          >
                        <AiFillLinkedin/>
          </a>
          <a
            href={Portofilo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-gray-100 hover:rounded-lg transition-all"
          >
              
            <FiExternalLink/>

              </a>
              
            </div>
          </div>
        </div>
    );
}

export default TeamCard;
