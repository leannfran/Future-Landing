import React from "react";
import { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const Desarrollo = () => {
  const [animacion1, setAnimacion1] = useState(false);
  const [animacion2, setAnimacion2] = useState(false);
  const [animacion3, setAnimacion3] = useState(false);
  const [animacion4, setAnimacion4] = useState(false);
  const [animacion5, setAnimacion5] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.getElementsByClassName('myElement');
      const viewportHeight = window.innerHeight;

      for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= viewportHeight;

        if (isInViewport) {
          switch (elements[i].id) {
            case 'myElement1':
              setAnimacion1(true);
              break;
            case 'myElement2':
              setAnimacion2(true);
              break;
            case 'myElement3':
              setAnimacion3(true);
              break;
            case 'myElement4':
              setAnimacion4(true);
              break;
            case 'myElement5':
              setAnimacion5(true);
              break;
            default:
              break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className=" ">
    
      <Element classID="" name="myElement1">
        <div
          id="myElement1"
          className={`${ 
            animacion1 ? 'animate-fade animate-ease-in-out animate-normal animate-fill-forwards opacity-100' : 'opacity-0'
          } flex gap-8 flex-col md:flex-row mx-3 md:mx-20 mt-20 myElement`}
        >
          <div className={`flex flex-col md:w-1/2  `}>
            <h4 className="text-3xl  custom-shadow-hover transition-all  font-black">
              FIRST STEP
            </h4>
            <p className="text-xl  font-light text-justify text-gray-900">
              Iniciamos nuestro viaje contigo con una llamada personalizada.
              Queremos conocerte y comprender a fondo tu proyecto. Estamos
              ansiosos por escuchar tus ideas, desafíos y metas, para poder
              ofrecerte la mejor solución posible.
            </p>
          </div>

          <img
            className="md:ml-20 my-5 md:w-1/3"
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F7.png?alt=media&token=287bed11-1810-4f8e-add7-53e80104354a"
            alt="imagen de servicio"
          />
        </div>
      </Element>

      <Element name="myElement2">
        <div
          id="myElement2"
          className={`${
            animacion2 ? 'animate-fade animate-ease-in-out animate-normal animate-fill-forwards opacity-100' : 'opacity-0'
          } flex flex-col md:flex-row gap-8 md:items-end mx-3 md:mx-20 mt-14  myElement`}
        >
          <img
            className="md:mx-20 md:w-1/3 hidden md:block"
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F3.png?alt=media&token=fc0f1d41-3e7e-4971-bfc3-0d1bee493857"
            alt="imagen de servicio"
          />
          <div className="flex flex-col md:w-1/2">
            <h4 className="text-3xl custom-shadow-hover transition-all  font-black">
              ACTION PLAN
            </h4>
            <p className="text-xl text-left font-light text-gray-900 pb-5">
            Cuando empecemos a trabajar juntos como growth partners, nuestro equipo se integrará completamente en tu empresa para llevar a cabo el plan de acción. Recibirás un proceso de integración, acceso a un espacio de trabajo y un seguimiento de objetivos. Como socios, nuestro compromiso es total y al 100%.
</p>
            <img
              className="md:mx-20 md:w-1/3 my-5 md:hidden"
              src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F3.png?alt=media&token=fc0f1d41-3e7e-4971-bfc3-0d1bee493857"
              alt="imagen de servicio"
            />
          </div>
        </div>
      </Element>

      <Element name="myElement3">
        <div
          id="myElement3"
          className={`${
            animacion3 ? 'animate-fade animate-ease-in-out animate-normal animate-fill-forwards opacity-100' : 'opacity-0'
          } flex gap-8 flex-col md:flex-row my-5 mx-3 md:mx-20 mt-20 myElement`}
        >
          <div className="flex flex-col md:w-1/2">
            <h4 className="text-3xl custom-shadow-hover transition-all  font-black">
              ONBOARDING STEP
            </h4>
            <p className="text-xl font-light text-gray-900">
              Una vez que empezemos a trabajar en conjunto como PARTNERS nuestro equipo se acoplara a tu empresa para poner en marcha el plan de accion, recibiras un onboard, acceso a un espacio de trabajo y seguimiento de objetivos, como partners nuestro compromiso es 100%.
            </p>
          </div>
          <img
            className="md:ml-20 md:w-1/3"
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F5.png?alt=media&token=00089e5f-b3a7-42f1-8c1a-7b75a5a7542d"
            alt="imagen de servicio"
          />
        </div>
      </Element>

      <Element name="myElement4">
        <div
          id="myElement4"
          className={`${
            animacion4 ? 'animate-fade animate-ease-in-out animate-normal animate-fill-forwards opacity-100' : 'opacity-0'
          } flex gap-8 flex-col md:flex-row my-5 mx-3 md:mx-20 mt-20 myElement`}
        >
          <img
            className="md:ml-20 md:w-1/3 hidden md:block"
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F4.png?alt=media&token=ec8a060d-3599-40b4-8f24-f30d20d60604"
            alt="imagen de servicio"
          />
          <div className="flex flex-col md:w-1/2">
            <h4 className="text-3xl custom-shadow-hover transition-all  font-black">
            GROWTH STRATEGY

            </h4>
            <p className="text-xl font-light text-gray-900 pb-5">
            Como tus Growth Partners, diseñaremos una estrategia personalizada para impulsar el crecimiento y la expansión de tu empresa. Nos enfocamos en identificar oportunidades clave y en maximizar el potencial de tu negocio.

</p>
            <img
              className="md:ml-20 md:w-1/3 my-5 md:hidden"
              src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F4.png?alt=media&token=ec8a060d-3599-40b4-8f24-f30d20d60604"
              alt="imagen de servicio"
            />
          </div>
        </div>
      </Element>

      <Element name="myElement5">
        <div
          id="myElement5"
          className={`${
            animacion5 ? 'animate-fade animate-ease-in-out animate-normal animate-fill-forwards opacity-100' : 'opacity-0'
          } flex gap-8 flex-col md:flex-row my-5 mx-3 md:mx-20 mt-20 myElement`}
        >
          <div className="flex flex-col md:w-1/2">
            <h4 className="text-3xl custom-shadow-hover transition-all  font-black">
            OPTIMIZACIÓN CONTINUA
            </h4>
            <p className="text-xl font-light text-gray-900">
            Nuestra colaboración como Growth Partners no se detiene en la implementación del plan inicial. Estamos comprometidos con la optimización continua, adaptando estrategias y tácticas para garantizar el éxito sostenible de tu empresa en un entorno cambiante. Tu crecimiento es nuestro objetivo constante.
            </p>
          </div>
          <img
            className="md:ml-20 md:w-1/3"
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F6.png?alt=media&token=f1774bd8-6a13-4e21-91d4-95d27d35801f"
            alt="imagen de servicio"
          />
        </div>
      </Element>
    </div>
  );
};

export default Desarrollo;