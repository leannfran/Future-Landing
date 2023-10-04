import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
const TeamCard = ({ name, position, imageUrl, Linkedin, Portofilo }) => {
  return (
    <div className="flex bg-gradient-to-tr from-tres to-primary rounded   shadow-lg hover:shadow-xl transition-shadow overflow-hidden md:w-1/4 ">
      <div className="flex  justify-center ">
        <div className='absolute'></div>
        <img
          src={imageUrl}
          alt={name}

          lazyload="true"
          className="w-28 max-h-44 object-cover "
        />
      </div>
      <div className="flex flex-col text-white items-start justify-between pl-2 gap-2 p-2">
        <h3 className="font-black p text-xl">
          {name}
        </h3>
        <p className="text-white border-b pl-2 border-primary ">
          {position}
        </p>
        <div className="flex w-full flex-col gap-1 items-start">
          <a
            href={Linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 flex  items-center hover:bg-gray-100 hover:rounded-lg transition-all"
          >
                        <AiFillLinkedin className='text-xl'/>
                        <p className='font-light pl-1  text-sm'>Linkedin</p>
          </a>
          
              
            </div>
          </div>
        </div>
    );
}

export default TeamCard;
