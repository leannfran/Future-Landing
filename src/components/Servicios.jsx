import React from 'react';
import Card from './cardServices';

const Servicios = () => {
    return (
        <div className='flex flex-col justify-start aling-center w-full h-screen  mt-16 '>
            <h2 className='text-3xl font-semibold tracking-wide text-center'>Elegi tu servicio</h2>
            <p className='md:mx-20 mt-2 font-light text-sm text-center'>Clickeando en el servicio que creas conveniente para tu empresa podes ver toda la informacion y comenzar en este nuevo camino rumbo a la "Digitalizacion" De tu empresa ! </p>
            <div className="grid grid-cols-1 mt-10 md:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        title="Service 1"
        description="Description of service 1"
        image="https://picsum.photos/id/1015/400/300"
      />
      <Card
        title="Service 2"
        description="Description of service 2"
        image="https://picsum.photos/id/1016/400/300"
      />
      <Card
        title="Service 3"
        description="Description of service 3"
        image="https://picsum.photos/id/1018/400/300"
      />
    </div>
            
        </div>
    );
}

export default Servicios;
