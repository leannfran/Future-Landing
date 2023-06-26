import React from 'react';
import Card from './cardServices';
import { useTranslation } from 'react-i18next'

const Servicios = () => {
  
  const [t,i18n] = useTranslation("global")

    return (
        <>
        <section>
            <div>
                <h5>LANDING PAGE</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sed expedita quam optio, quaerat, est officiis, voluptatum assumenda quas nobis ratione voluptas ipsam ullam ipsa commodi quasi beatae odio quod!</p>
            </div>
        </section>
        
        </>
    );
}

export default Servicios;
