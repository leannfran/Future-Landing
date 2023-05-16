import React from "react";
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";
import TeamCard from "./TeamCard";
const Team = () => {
  return (
    <div
      id="Team"
      className="
    w-full h-screen
    flex flex-col items-center 
    mt-10
    "
    >
      <h3 className="text-3xl font-extralight mb-10 mt-14 ">
        {" "}
        Sobre Nosotros{" "}
      </h3>

      <section className="">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-end">
              <img
                className="max-w-[399px] h-auto mb-8 rounded shadow-lg hover:shadow-xl hover:shadow-primary transition-shadow  "
                src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/LOGO%20FUTURE.png?alt=media&token=3d6b65eb-d4f1-4260-b846-56700955ff7d"
                alt="Imagen de la empresa"
              />
            </div>
            <div className="md:pl-8">
              <p className="text-lg font-light leading-relaxed mb-4">
                ¡Hola a todos! Somos Future, un grupo de emprendedores
                apasionados por la tecnología. Nos dedicamos a ofrecer
                soluciones <span className="font-bold">tecnológicas</span>{" "}
                innovadoras para nuestros valiosos clientes.
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                Nuestro equipo de expertos en{" "}
                <span className="font-bold border-b border-primary">
                  {" "}
                  desarrollo
                </span>{" "}
                de software se enfoca en crear aplicaciones y sistemas
                personalizados utilizando las últimas tecnologías y las mejores
                prácticas de la industria.
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                Nos comprometemos a proporcionar{" "}
                <span className="font-bold border-b border-primary">
                  soluciones de alta calidad
                </span>{" "}
                , satisfaciendo las necesidades y superando las expectativas de
                nuestros clientes.
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                En Future, creemos en el poder transformador de la tecnología y
                nos enorgullece ayudar a las empresas a alcanzar su máximo
                potencial a través de{" "}
                <span className="font-bold border-b border-primary">
                  soluciones digitales
                </span>{" "}
                eficientes y efectivas.
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                Trabajamos estrechamente con nuestros clientes, comprendiendo
                sus objetivos y brindando soluciones a medida que impulsen su
                éxito en el{" "}
                <span className="font-bold border-b border-primary">
                  mundo digital
                </span>{" "}
                .
              </p>
              <p className="text-lg font-light leading-relaxed mb-4">
                Confía en{" "}
                <span className="border-b border-primary"> Future</span> para
                todas tus necesidades tecnológicas. Estamos aquí para ayudarte a
                llevar tu negocio al{" "}
                <span className="font-bold font-xl italic">
                  siguiente nivel.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <TeamCard
          name="Leandro Franco"
          position="ceo"
          imageUrl="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f"
          Linkedin="https://www.facebook.com/jtdevsmx"
          Portfolio="https://www.instagram.com/jtdevsmx/"
        />
        <TeamCard
          name="Alan Vargas"
          position="Full Stack"
          imageUrl="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f"
          Linkedin="https://www.facebook.com/jtdevsmx"
          Portfolio="https://www.instagram.com/jtdevsmx/"
        />
        <TeamCard
          name="Candelaria Romero"
          position="Ux/Ui Designer"
          imageUrl="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f"
          Linkedin="https://www.facebook.com/jtdevsmx"
          Portfolio="https://www.instagram.com/jtdevsmx/"
        />

      </div>
      
    </div>
  );
};

export default Team;
