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
    <>
      <Element name="myElement1">
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
              SECOND STEP
            </h4>
            <p className="text-xl text-left font-light text-gray-900 pb-5">
              Una vez realizada la llamada comenzamos con el Diseño UX/UI de la
              mano de nuestra talentosa ux/ux designer que se sumergirá en tu
              visión y trabajará en colaboración contigo. Juntos, daremos vida a
              una experiencia de usuario (UX) única y un diseño de interfaz (UI)
              cautivador. Queremos que tu proyecto se destaque y deje una
              impresión duradera en tus usuarios.
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
              THIRD STEP
            </h4>
            <p className="text-xl font-light text-gray-900">
              Una vez que hayamos obtenido tu aprobación para el diseño, nuestro
              equipo de desarrollo entrará en acción. Nos enfocamos en convertir
              tus ideas en una realidad tangible. Utilizamos tecnologías de
              vanguardia como Next.js y buenas prácticas de desarrollo para
              asegurarnos de que tu proyecto esté a la altura de tus expectativas
              y sea de la más alta calidad.
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
              FOURTH STEP
            </h4>
            <p className="text-xl font-light text-gray-900 pb-5">
              Una vez completado el desarrollo, nos aseguraremos de que tu
              proyecto esté completamente probado y listo para ser lanzado al
              mundo. Nuestro equipo de control de calidad realizará pruebas
              exhaustivas para garantizar que todo funcione sin problemas y cumpla
              con tus expectativas. Después de recibir tu aprobación final,
              implementaremos el lanzamiento en producción y estaremos ahí para
              asegurarnos de que todo vaya según lo planeado.
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
              FIFTH STEP
            </h4>
            <p className="text-xl font-light text-gray-900">
              Después del lanzamiento, continuamos brindándote soporte y
              mantenimiento para garantizar que tu proyecto siga funcionando sin
              problemas. También podemos ayudarte con actualizaciones, mejoras y
              cualquier otra cosa que necesites para hacer crecer tu negocio en
              línea. Estamos comprometidos a ser tu socio tecnológico a largo
              plazo y a ayudarte en cada paso del camino.
            </p>
          </div>
          <img
            className="md:ml-20 md:w-1/3"
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/imagenes%20how%20works%2F6.png?alt=media&token=f1774bd8-6a13-4e21-91d4-95d27d35801f"
            alt="imagen de servicio"
          />
        </div>
      </Element>
    </>
  );
};

export default Desarrollo;