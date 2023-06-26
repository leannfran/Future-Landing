import React from "react";
import TeamCard from "./TeamCard";
import { useTranslation } from 'react-i18next'

const Team = () => {

  const [t,i18n] = useTranslation("global")

  return (
    <>
      <h3 className="text-center font-thin   text-black  text-6xl mb-10" id="Team"><span className="custom-shadow ">#</span><span className="">TEAM</span></h3>
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-6 md:gap-20 mx-4">
        <TeamCard
          name="Leandro Franco"
          position="Ceo - Front End"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/%5Bremoval.ai%5D_tmp-646fd21dbc4ec.png?alt=media&token=8eca1078-059d-472f-8bcb-901dacd1600c"
          Linkedin="https://www.linkedin.com/in/leandro-franco-bb9101245/"
          Portofilo="https://my-portfolio-lac-psi.vercel.app/"
        />
        <TeamCard
          name="Candelaria Romero"
          position={t("team.ux/ui")}
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/cande.png?alt=media&token=a76dbc9c-9a05-4ccd-a4ff-1cb3deb19d3d"
          Linkedin="https://www.linkedin.com/in/candelaria-romero-01/"
          Portofilo="https://www.behance.net/candelaromero4"
        />
        <TeamCard
          name="Alan Vargas"
          position="Full Stack Dev"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/alan.png?alt=media&token=b31acad7-dfb7-4688-afb5-d5dee4d1637b"
          Linkedin="https://www.linkedin.com/in/alan-ezequiel-vargas-263075229/"
          Portofilo="https://alan-vargas-portfolio.netlify.app/"
        />
        <TeamCard
          name="Exequiel Portero"
          position="Full Stack Dev"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/eze.png?alt=media&token=d736e0c5-35e9-4959-b2d0-5349e0e995d0"
          Linkedin="https://www.linkedin.com/in/exequiel-portero/"
          Portofilo="https://github.com/Portero20"
        />
          <TeamCard
          name="Matias Otero"
          position="Community Manager"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/%5Bremoval.ai%5D_tmp-645aba561f7c4.png?alt=media&token=a6988370-756a-487f-96f5-d09283889339"
          Linkedin="https://www.linkedin.com/in/matias-otero-8b48951ba/"
          Portofilo="https://github.com/Portero20"
        />
      </div>
    </>
  );
};

export default Team;
