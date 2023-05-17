import { RiCodeSSlashFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex fixed items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50 transition-all duration-700 ${
        scrolled ? " backdrop-blur-sm transition-all" : "bg-transparent"
      }`}
    >
      <div className="w-1/6 text-center">
        <span className="text-2xl font-bold relative ">
          Future<RiCodeSSlashFill className="absolute left-20 bottom-0 " />
        </span>
      </div>
      <nav
        className={`fixed xl:bg-transparent backdrop-blur-xl w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "right-0" : "-right-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end transition-all duration-700 font-light `}
      >
        <a href="#" className="hover:bg-black py-[2px] px-1 hover:text-white transition-all rounded-sm hover:shadow-sm m-5">
          Inicio
        </a>
        <a href="#Servicios" className="hover:bg-black  px-1 hover:text-white transition-all rounded-sm hover:shadow-sm m-5">
          Servicios
        </a>
        <a href="#Team" className="hover:bg-black  px-1 hover:text-white transition-all rounded-sm hover:shadow-sm m-5">
          Nosotros
        </a>
    
        <a href="#Contacto" className="hover:bg-black  px-1 hover:text-white transition-all rounded-sm hover:shadow-sm m-5">
          Contacto
        </a>
      </nav>
      <button
        className=" text-3xl z-20 p-3 xl:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
