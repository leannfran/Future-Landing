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
      toggleLabel.innerText = 'Inglés';

    } else {

      toggleDot.style.transform = 'translateX(0)';
      toggleDot.style.backgroundColor = 'white';
      toggleLabel.innerText = 'Español';

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
      className={`flex fixed top-0 items-center justify-between xl:justify-start w-full p-4 h-[10vh] z-50 transition-all duration-700 ${
        scrolled ? "backdrop-blur-sm transition-all" : "bg-transparent"
      }`}
    >
      <div className="w-1/6 text-center">
        <span className="text-2xl font-bold relative ">
          Future<RiCodeSSlashFill className="absolute left-20 bottom-0 " />
        </span>
      </div>
      <nav
        className={`fixed xl:bg-transparent xl:backdrop-blur-none xs:backdrop-blur-xl w-[80%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "right-0" : "-right-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center xl:justify-end transition-all duration-700 font-light `}
      >
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
            <span className="relative">
              <span className="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
              <span id="toggle-dot" className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></span>
            </span>
            <span id="toggle-label" className="ml-3 text-gray-700 font-normal">Español</span>
          </label>
        </div>



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
