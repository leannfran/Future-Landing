import { RiCodeSSlashFill, RiCodeFill } from "react-icons/ri";
import { useTranslation } from 'react-i18next'
import i18next from "i18next";

const Hero = () => {

    const [t] = useTranslation("global")

    return (
        <section className="hero md:bg-fixed bg-cover bg-no-repeat pt-[10vh] min-h-screen grid grid-cols-1 md:grid-cols-8 pb-[5vh]  ">
            
            <div className=" md:col-span-5 flex items-center justify-start md:justify-center p-5 md:p-20 ">
                <div className="flex flex-col gap-8 ">
                    <h1 className="md:text-[7rem] xs:text-[6rem] text-[5rem] font-medium tracking-wide leading-[7rem]  ">
                    {t("hero.title")}  <span className=" text-primary">{t("hero.ideal")}</span> {i18next.language === 'es' ? null : t("hero.website")}
                    </h1>
                    <p className="text-white font-light text-xl tracking-wider leading-[2.5rem]">{t("hero.description")}{/* Somos future una agencia destinada a digitalizar tu Empresa, Negocio o Emprendimiento de manera sencilla  */}
                    </p>
                    <div className="flex  ">
                        <a className="bg-primary border-primary text-black text-center
                         font-semibold border-2 py-2 md:px-8 rounded-full
                         w-1/3 md:w-[25vh]"
                         href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90">
                            {t("buttons.digitalizate")}
                        </a>
                        <a className="border-2 font-semibold border-primary text-primary py-2 px-6 hover:bg-primary hover:text-black rounded-full transition-colors ml-3" href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90" target="_blank">
                        {t("buttons.agenda")}</a>
                    </div>
                </div>
            </div>
            
            <div className="justify-center flex flex-col col-span-3">

                <img src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/iphoneymac.png?alt=media&token=ad5f529a-7420-4f3e-9598-416005750d5d" alt="" />
                
            </div>
        </section>
        
    );
}

export default Hero;
