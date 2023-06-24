import React from "react";
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import aboutCard from "./TeamCard";
import { useTranslation } from 'react-i18next'
import i18next from "i18next";

const Presentation = () => {

  const [t,i18n] = useTranslation("global")

  return (
    <div
      id="About"
      className="
    w-full h-auto
    flex flex-col items-center 
    my-10
    "
    >
      <h3 className="text-3xl font-extralight mb-10 mt-14 ">
        {" "}
        {t("about.0.title")}{" "}
      </h3>

      <section className="">
        <div className=" mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-end items-start">
              <img
                className=" md:min-w-[499px] my-8 w-full object-contain   rounded shadow-lg hover:shadow-xl hover:shadow-primary transition-shadow  "
                src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/LOGO%20FUTURE.png?alt=media&token=3d6b65eb-d4f1-4260-b846-56700955ff7d"
                alt="Imagen de la empresa"
              />
            </div>
            <div className="md:pl-8 p-4">
              <p className="text-lg font-light leading-relaxed mb-4">
              {t("about.1.paragraph1")}{" "} <span className="font-bold border-b border-primary">{t("about.1.technology")}{" "}</span>{t("about.1.subparagraph1")}{" "}
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
              {t("about.2.paragraph2")}{" "}
                <span className="font-bold border-b border-primary">
                  {" "}
                  {t("about.2.development")}
                </span>{" "}
                {t("about.2.subparagraph2")}
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
              {t("about.3.paragraph3")}{" "}
                <span className="font-bold border-b border-primary">
                {t("about.3.solutions")}
                </span>{" "}
                {t("about.3.subparagraph3")}
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
              {t("about.4.paragraph4")}{" "}
                <span className="font-bold border-b border-primary">
                {t("about.4.solutions_digital")}
                </span>{" "}
                {i18next.language === "en" ? null : t("about.4.subparagraph4")}
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
              {t("about.5.paragraph5")}{" "}
                <span className="font-bold border-b border-primary">
                {t("about.5.world_digital")}
                </span>{" "}
                .
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
              {t("about.6.paragraph6")}{" "}
                <span className="border-b border-primary"> {t("about.6.future")}</span> {t("about.6.subparagraph6")}{" "}
                <span className="font-bold font-xl italic">
                {t("about.6.next_level")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
   
      

      
    </div>
  );
};

export default Presentation;
