import { RiCodeSSlashFill, RiCodeFill } from "react-icons/ri";
const Hero = () => {
    return (
        <section className="hero bg-fixed bg-cover bg-no-repeat pt-[10vh] min-h-screen grid grid-cols-1 md:grid-cols-8 pb-[5vh]  ">
            
            <div className=" md:col-span-5 flex items-center justify-start md:justify-center p-5 md:p-20 ">
                <div className="flex flex-col gap-8 ">
                    <h1 className="md:text-8xl  text-[5.2rem] font-medium tracking-wide leading-[7rem]  ">
                    Datos ilimitados para el éxito  <span className=" text-primary  ">global</span>
                    </h1>
                    <p className="text-white font-light text-xl tracking-wider leading-[2.5rem]">Descubre un mundo de oportunidades con nuestras bases de datos globales: Conéctate, crece y alcanza el éxito en cualquier lugar del mundo.{/* Somos future una agencia destinada a digitalizar tu Empresa, Negocio o Emprendimiento de manera sencilla  */}
                    </p>
                    <div className="flex  ">
                        <a className="bg-primary border-primary text-black text-center
                         font-semibold border-2 py-2 md:px-8 rounded-full
                         w-1/3 md:w-[25vh]"
                         href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90">
                            Digitalizate
                        </a>
                        <a className="border-2 font-semibold border-primary text-primary py-2 px-6 hover:bg-primary hover:text-black rounded-full transition-colors ml-3" href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90">
Agenda una llamada                        </a>
                    </div>
                </div>
            </div>
            
            <div className=" col-span-3">
                
            </div>
        </section>
        
    );
}

export default Hero;
