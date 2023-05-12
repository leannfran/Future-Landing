import React from 'react';
import Card from './cardServices';

const Servicios = () => {
    return (
        <div className='flex flex-col justify-start aling-center w-full h-screen  mt-16 '>
            <h2 className='text-3xl font-semibold tracking-wide text-center'>Elegi tu servicio</h2>
            <p className='md:mx-20 mt-2 font-light text-sm text-center'>Clickeando en el servicio que creas conveniente para tu empresa podes ver toda la informacion y comenzar en este nuevo camino rumbo a la "Digitalizacion" De tu empresa ! </p>
            <div className="grid grid-cols-1 mt-10 md:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Desarrollo web"
        description="Creamos sitios web personalizados que se adaptan a las necesidades específicas de tu negocio. Utilizamos las últimas tecnologías y mejores prácticas de diseño para asegurarnos de que tu sitio web sea rápido, seguro y fácil de usar."
        image="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/1.png?alt=media&token=490cbb87-3c92-4c47-83c2-324ba40e66b5"
      />
      <Card
        title="Diseño"
        description="Nuestro equipo de diseño gráfico crea diseños visualmente impactantes que representan la esencia de tu marca y te ayudan a destacar en un mercado saturado."
        image="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/3.png?alt=media&token=633c90ba-ae1d-4018-b2f3-d9e3d4cabb73"
      />
      <Card
        title="Marketing digital"
        description=" Maximiza el alcance de tu marca y atrae a más clientes potenciales a través de nuestras estrategias de publicidad digital y gestión de redes sociales."
        image="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/2.png?alt=media&token=10b04e7b-f59d-4c73-982d-823f7743bef1"
      />
    </div>
            
        </div>
    );
}

export default Servicios;
