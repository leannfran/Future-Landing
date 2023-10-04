import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const [t,i18n] = useTranslation("global")

    return (
        <div className="bg-gris text-white w-full p-8">
        <div className="grid grid-rows-1 gap-8 md:grid-cols-12 xl:gap-8">
          <div className="md:col-span-12 xl:col-span-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-100">Future</h1>
            <p className="text-gray-200 text-justify">
            {t("footer.0.future_description")}
            </p>
          </div>
          <div className="md:col-span-4 xl:col-span-2">
            <h2 className="font-bold mb-6 uppercase">Menu</h2>
            <nav className="flex flex-col gap-4">
              <a href="#" className="hover:underline">
              {t("header.Home")}
              </a>
              <a href="#Servicios" className="hover:underline">
              {t("header.Services")}
              </a>
              <a href="#Nosotros" className="hover:underline">
              {t("header.About")}
              </a>

              <a href="#Team" className="hover:underline">
              {t("header.Team")}
              </a>

              <a href="#" className="hover:underline">
              {t("header.Contact")}
              </a>
            </nav>
          </div>
          <div className="md:col-span-4 xl:col-span-3">
            <h2 className="font-bold mb-6 uppercase">{t("footer.1.social_network")}</h2>
            <nav id='Contacto'>
              <a
                href="https://www.facebook.com/profile.php?id=100089096902334"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  className="w-[20px] h-[20px]"
                  alt="JT Devs"
                />
                Future - Desarrollo Web
              </a>
              <a
                href="https://www.instagram.com/future.agency.dzn/"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  className="w-[20px] h-[20px]"
                  alt="JT Devs"
                />
                future.digital.dzn 
              </a>
              <a
                href="https://www.linkedin.com/company/future-agency-dzn/"
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                target="_blank"
              >
                <AiFillLinkedin
                  className="w-[20px] h-[20px]"
                  
                />
                Future Agency DZN
              </a>
            </nav>
          </div>
          <div className="md:col-span-4 xl:col-span-3">
            <h2 className="font-bold mb-6 uppercase">{t("header.Contact")}</h2>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Buenos Aires, Argentina
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                leanwebdeveloper@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                (+54) 9 11 3269-3101
              </p>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
          <p className="text-gray-200 text-center md:text-left">
            &copy; 2023
            <span className="text-gray-100 font-bold"> Future Agency Dzn.</span> {t("footer.4.copyright")}
          </p>
         
        </div>
      </div>
    );
}

export default Footer;
