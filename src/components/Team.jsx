import React from "react";
import TeamCard from "./TeamCard";
import { useTranslation } from 'react-i18next'

const Team = () => {

  const [t,i18n] = useTranslation("global")

  return (
    <div className="bg-gris py-20">
      <h3 className="text-center font-thin   text-white  text-6xl mb-10" id="Team"><span className="custom-shadow ">#</span><span className="">TEAM</span></h3>
      <div className="flex flex-wrap justify-center flex-col md:flex-row gap-6 md:gap-20 mx-4">
        <TeamCard
          name="Leandro Franco"
          position="Growth Marketer"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/Screen%20Shot%202023-08-01%20at%2015.57.24.png?alt=media&token=fc8cc193-fa21-4ae8-b080-91c1cd86f2dd"
          Linkedin="https://www.linkedin.com/in/leandro-franco-bb9101245/"
          Portofilo="https://my-portfolio-lac-psi.vercel.app/"
        />
      
        <TeamCard
          name="Agustina Silveira"
          position='graphic designer'
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
          name="Natalia Coronel"
          position="Community Manager"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/1.png?alt=media&token=9d519a39-8479-4aba-a8f6-f8952c2fbde8&_gl=1*bfiotd*_ga*MTYwNzk3NjQyNS4xNjc2MzgyMzU3*_ga_CW55HF8NVT*MTY5NjQ1MTI0NS42Ny4xLjE2OTY0NTEyODEuMjQuMC4w"
          Linkedin="https://www.linkedin.com/in/natalia-coronel-a98979217/"
          Portofilo="https://alan-vargas-portfolio.netlify.app/"
        />
         <TeamCard
          name="Francisco Duarte"
          position="Sales Especialist"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/2.png?alt=media&token=ca489ee8-0b68-4d93-ad83-61e0e3d67106&_gl=1*1grue3p*_ga*MTYwNzk3NjQyNS4xNjc2MzgyMzU3*_ga_CW55HF8NVT*MTY5NjQ1MTI0NS42Ny4xLjE2OTY0NTEzMDguNjAuMC4w"
          Linkedin="https://www.linkedin.com/in/francisco-duarte-602b83250/"
          Portofilo="https://alan-vargas-portfolio.netlify.app/"
        />

       
      </div>
    </div>
  );
};

export default Team;
