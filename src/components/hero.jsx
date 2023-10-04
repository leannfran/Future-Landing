import { RiCodeSSlashFill, RiCodeFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useEffect } from "react";
import { BsInstagram, BsLinkedin, BsWhatsapp, BsMailbox , BsMouse} from "react-icons/bs";

const Hero = () => {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      Calendly.initBadgeWidget({
        url: "https://calendly.com/leandro-future/propuesta-future",
        text: "Programe una reunión conmigo",
        color: "#2f05ff",
        textColor: "#ffffff",
        branding: true,
      });
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className=" bg-gris text-white  h-screen pt-20 md:pt-10 flex flex-col items-center justify-start    ">
      <h1 className="font-bold text-7xl md:text-[10rem] animate-fade animate-duration-[2800ms] animate-delay-[400ms] ">
        FUTURE
      </h1>
      <h2 className="font-extralight text-5xl mt-10 md:mt-0 md:text-7xl animate-fade animate-duration-[2800ms] animate-delay-[700ms] border-primary text-center md:border-t">
        YOUR GROWTH PARTNERS
      </h2>
      <div className="flex gap-10 mt-10">
        <a
          className="bg-primary animate-fade animate-duration-[2800ms] animate-delay-[900ms] p-4 text-xl rounded-full"
          href="https://www.instagram.com/future.agency.dzn/"
        >
          <BsInstagram />
        </a>
        <a
          className="bg-primary animate-fade animate-duration-[2800ms] animate-delay-[1100ms] p-4 text-xl rounded-full"
          href="https://api.whatsapp.com/send?phone=5491132693101&text=Hola%20quiero%20DIGITALIZAR%20mi%20Empresa%20%F0%9F%8C%90"
        >
          <BsWhatsapp />
        </a>
        <a
          className="bg-primary p-4 animate-fade animate-duration-[2800ms] animate-delay-[1200ms] text-xl rounded-full"
          href="https://www.linkedin.com/company/future-agency-dzn/"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-primary p-4 animate-fade animate-duration-[2800ms] animate-delay-[1400ms] text-xl rounded-full"
          href="mailto:leandro@future-agency.tech"
        >
          <BsMailbox />
        </a>
      </div>
      <BsMouse className="text-3xl animate-fade animate-duration-[2800ms] animate-delay-[3000ms] mt-20" />
    </section>
  );
};

export default Hero;
