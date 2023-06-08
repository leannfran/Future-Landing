import { RiCodeSSlashFill, RiCodeFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="hero md:bg-fixed bg-cover bg-no-repeat pt-[10vh] min-h-screen grid grid-cols-1 md:grid-cols-8 pb-[5vh]">
      <div className="md:col-span-5 flex items-center justify-start md:justify-center p-5 md:p-20">
        <div className="flex flex-col gap-8">
          <motion.h1
            className="md:text-[7rem] xs:text-[6rem] text-[5rem] font-medium tracking-wide leading-[7rem]"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.2 }}
          >
            Crea tu pagina web <span className="text-primary">ideal</span>
          </motion.h1>
          <motion.p
            className="text-white font-light text-xl tracking-wider leading-[2.5rem]"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.4 }}
          >
            Somos future una agencia destinada a la digitalizacion de tu empresa de manera rapida y eficaz
            {/* Somos future una agencia destinada a digitalizar tu Empresa, Negocio o Emprendimiento de manera sencilla */}
          </motion.p>
          <motion.div
            className="flex"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ delay: 0.6 }}
          >
            <a
              className="bg-primary border-primary text-black text-center
                         font-semibold border-2 py-2 md:px-8 rounded-full
                         w-1/3 md:w-[25vh]"
              href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90"
            >
              Digitalizate
            </a>
            <a
              className="border-2 font-semibold border-primary text-primary py-2 px-6 hover:bg-primary hover:text-black rounded-full transition-colors ml-3"
              href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90"
            >
              Agenda una llamada
            </a>
          </motion.div>
        </div>
      </div>

      <div className="justify-center flex flex-col col-span-3">
        <motion.img
          src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/iphoneymac.png?alt=media&token=ad5f529a-7420-4f3e-9598-416005750d5d"
          alt=""
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.8 }}
        />
      </div>
    </section>
  );
}

export default Hero;
