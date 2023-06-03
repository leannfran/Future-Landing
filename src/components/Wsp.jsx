import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

const WhatsAppButton = () => {
  return (
   
    <>
    
      <WhatsAppWidget
        phoneNumber="5401132693101"
        sendButtonText='Enviar'
        inputPlaceHolder='Escribe un mensaje...'
        companyName='Future'
        replyTimeText='En linea'
        message='¡Hola! En Future, nuestro equipo de servicio al cliente está listo para ayudarte en lo que necesites. Contáctanos y experimenta una atención excepcional. ¡Estamos aquí para ti! 🤝'
      />

    </>
   
  );
};

export default WhatsAppButton;
