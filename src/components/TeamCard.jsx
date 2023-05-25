import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'
const TeamCard = ({ name, position, imageUrl, Linkedin, Portofilo }) => {
  return (
    <div className="flex rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden bg-gray-50 w-1/3 border">
      <div className="flex justify-center ">
        <img
          src={imageUrl}
          alt={name}

          lazyload="true"
          className="w-28 object-cover "
        />
      </div>
      <div className="flex flex-col items-start justify-between pl-2 gap-2 p-2">
        <h3 className="font-semibold p text-xl">
          {name}
        </h3>
        <p className="text-gray-600 border-b pl-2 border-primary ">
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
          <a
            href={Portofilo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 flex items-center  hover:bg-gray-100 hover:rounded-lg transition-all"
          >
              
            <FiExternalLink className='text-xl'/>
            <p className=' font-light pl-1  text-sm'> Portfolio</p>

              </a>
              
            </div>
          </div>
        </div>
    );
}

export default TeamCard;
