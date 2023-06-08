import React, { useState, useEffect } from 'react';
import Card from './cardServices';
import { motion } from 'framer-motion';

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('Servicios');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id='Servicios' className='flex flex-col justify-start aling-center w-full min-h-screen mt-16'>
      <motion.h2
        className='text-3xl font-normal tracking-wide text-center'
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        Elegi tu <span className='border-b-2 border-primary font-semibold pb-0.5'>servicio</span>
      </motion.h2>
      <motion.p
        className='md:mx-20 mt-2 font-light text-sm text-center mx-1'
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Clickeando en el servicio que creas conveniente para tu empresa podes ver toda la informacion y comenzar en este nuevo camino rumbo a la "Digitalizacion" De tu empresa!
      </motion.p>
      <motion.div
        className='grid grid-cols-2 mx-6 mt-10 md:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-6'
        initial='hidden'
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card
          title='Desarrollo web'
          description='Creamos sitios web personalizados que se adaptan a las necesidades específicas de tu negocio. Utilizamos las últimas tecnologías y mejores prácticas de diseño para asegurarnos de que tu sitio web sea rápido, seguro y fácil de usar.'
          image='https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/desarrollo.png?alt=media&token=86e72111-793f-492f-8d65-e2d0a78151d9'
        />
        <Card
          title='Bases de Datos'
          description='Imagina poder encontrar a tus clientes ideales con facilidad, sin perder tiempo valioso en investigaciones exhaustivas. Nuestras bases de datos globales te permiten conectar con prospectos relevantes de manera eficiente, ahorrándote el esfuerzo de buscar manualmente información dispersa en diferentes fuentes.'
          image='https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/bases.png?alt=media&token=db9807a6-dc60-4566-b5e0-429688d294f5'
        />
        <Card
          title='Diseño'
          description='Nuestro equipo de diseño crea diseños visualmente impactantes que representan la esencia de tu marca y te ayudan a destacar en un mercado saturado. Además, ofrecemos servicios de diseño UX/UI para garantizar una experiencia de usuario excepcional y una interacción intuitiva con tus productos o servicios'
          image='https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/desing.png?alt=media&token=81c2d778-38e5-4356-866e-9d0e9f1aedb5'
        />
      </motion.div>
    </div>
  );
};

export default Servicios;
