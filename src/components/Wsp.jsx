import React from 'react';
import {BsWhatsapp} from 'react-icons/bs'
const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5401132693101"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 p-4 bg-green-500 z-10 text-white rounded-full shadow-lg hover:bg-green-600"
    >
      <BsWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
