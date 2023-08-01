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
          position="ceo / web developer / growth especialist"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/Screen%20Shot%202023-08-01%20at%2015.57.24.png?alt=media&token=fc8cc193-fa21-4ae8-b080-91c1cd86f2dd"
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
          name="Agustina Silveira"
          position={t("team.ux/ui")}
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/c9646563-a2fe-4627-9e6f-0a2ac55d59dc%20(1).png?alt=media&token=be7d411e-acd1-42b6-8460-50a2951e2998"
          Linkedin="https://www.linkedin.com/in/agustina-silveira-8596b1267"
          Portofilo="https://www.canva.com/design/DAFc0Mipvn4/39ySbid_Yx-RcnzwAK9Xlw/view?utm_content=DAFc0Mipvn4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
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
         <TeamCard
          name="Ramiro Bravo"
          position="Community Manager / Traficker"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/097832ff-f59d-4f2f-a215-e69a6f580402.png?alt=media&token=60f6dc2c-a2d7-4ab8-90d1-e82bacc1d6a9"          Linkedin="https://www.linkedin.com/in/ramiro-bravo-17a281283/"
          Portofilo=""
          />
      </div>
    </>
  );
};

export default Team;
