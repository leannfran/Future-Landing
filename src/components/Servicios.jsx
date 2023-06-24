import React from 'react';
import Card from './cardServices';
import { useTranslation } from 'react-i18next'

const Servicios = () => {
  
  const [t,i18n] = useTranslation("global")

    return (
        <div id='Servicios' className='flex flex-col justify-start aling-center w-full min-h-screen  mt-16 '>
          
            <h2 className='text-3xl font-normal tracking-wide text-center'>{t("services.0.title")} <span className='border-b-2 border-primary font-semibold pb-0.5'>{t("services.0.subtitle")}</span> </h2>
            <p className='md:mx-20 mt-2 font-light text-sm text-center mx-1'>{t("services.0.description")}</p>
            <div className="grid grid-cols-2 mx-6 mt-10 md:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title={t("services.1.desarrollo")}
                description={t("services.1.description")}
                image="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/desarrollo.png?alt=media&token=86e72111-793f-492f-8d65-e2d0a78151d9"
              />
           
      <Card
        title={t("services.3.diseño")}
        description={t("services.3.description")}
        image="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/desing.png?alt=media&token=81c2d778-38e5-4356-866e-9d0e9f1aedb5"/>
     <Card
        title="Marketing Digital"
        description=""
        image="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/mark.png?alt=media&token=e2375d2a-a6da-46f5-aaac-8b9abc1ae6f6&_gl=1*30e2zd*_ga*MTYwNzk3NjQyNS4xNjc2MzgyMzU3*_ga_CW55HF8NVT*MTY4NjMyNDIwNy4zNy4xLjE2ODYzMjQ0MjUuMC4wLjA."/>
    </div>
            
        </div>
    );
}

export default Servicios;
