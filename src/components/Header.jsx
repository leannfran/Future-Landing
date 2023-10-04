import { RiCodeSSlashFill, RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [t,i18n] = useTranslation("global")

  function toggleLanguage() {

    const toggle = document.getElementById('toggle');
    const toggleDot = document.getElementById('toggle-dot');
    const toggleLabel = document.getElementById('toggle-label');
    
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    
    if (toggle.checked) {

      toggleDot.style.transform = 'translateX(100%)';
      toggleDot.style.backgroundColor = '#10B981';
      toggleLabel.innerText = '🇺🇸';

    } else {

      toggleDot.style.transform = 'translateX(0)';
      toggleDot.style.backgroundColor = 'white';
      toggleLabel.innerText = '🇪🇸';

    }

  }

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
      className={`flex bg-gris text-white   items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50 transition-all duration-700 `}
    >
      <div className="w-1/6 text-center">
        <img src="img/logo.png" className="w-20" alt="logo future" />
       
      </div>
      <nav
        className={`fixed bg-gris z-50 xs:backdrop-blur-xl w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "right-0" : "-right-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end transition-all duration-700 font-light `}
      >
         <button
        className=" text-3xl z-60 p-3 xl:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
       <RiCloseLine />
      </button>
        <a href="#" className="hover:border-b-2 hover:border-black py-[2px] px-1 transition-all rounded-sm hover:shadow-sm m-5 font-medium">
        {t("header.Home")}
        </a>
        <a href="#Servicios" className="hover:border-b-2 hover:border-black  px-1  transition-all rounded-sm hover:shadow-sm m-5 font-medium">
        {t("header.Services")}
        </a>
        <a href="#About" className="hover:border-b-2 hover:border-black px-1  transition-all rounded-sm hover:shadow-sm m-5 font-medium">
        {t("header.About")}
        </a>

        <a href="#Team" className="hover:border-b-2 hover:border-black px-1  transition-all rounded-sm hover:shadow-sm m-5 font-medium">
        {t("header.Team")}
        </a>
    
        <a href="#Contacto" className="hover:border-b-2 hover:border-black  px-1  transition-all rounded-sm hover:shadow-sm m-5 font-medium">
        {t("header.Contact")}
        </a>


        <div className="flex items-center">
          <input type="checkbox" id="toggle" className="hidden" onClick={() => toggleLanguage()} />
          <label htmlFor="toggle" className="flex items-center cursor-pointer">
           
          </label>
        </div>



      </nav>
      <button
        className=" text-3xl z-60 p-3 xl:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
