import React from "react";
import Card from "./cardServices";
import { useTranslation } from "react-i18next";
import CardPartner from "./CardPartner";

const Servicios = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1d1d1b" fill-opacity="1" d="M0,192L60,192C120,192,240,192,360,176C480,160,600,128,720,117.3C840,107,960,117,1080,149.3C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <section className="pt-2 bg-gris  relative ">q
      
        <h4 className="custom-shadow text-7xl md:text-8xl font-light mb-96 md:mb-20 text-start ml-3 md:ml-64 text-white ">
          OUR <br />
           SERVICES
           <br />
           <p className="text-2xl font-light py-5   ">Whit Future Growth Parntership</p>
        </h4>

        <img
          className="absolute md:right-28 md:w-1/3 top-64 md:top-0 "
          src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/Our%20services%20(Post%20de%20Facebook%20(Horizontal)).png?alt=media&token=175179e0-ecd4-4e17-a16e-ea3fe17932bc"
          alt="celular"
        />
        <div className="flex gap-10 justify-center flex-wrap">
          <Card
            title="Branding - Brand identity"
            p1="La creación y gestión de una marca que conecta con su audiencia y genera clientes leales"
            p2="Captura la atención de tus visitantes"
            p3="Aumenta la conversión de tu sitio web"
            p4="Diseño personalizado y atractivo"
            p5="Estructura optimizada para resultados"
            p6="Impulsa tu marca y obtén más clientes"
            p7="Mejora la experiencia del usuario"
          ></Card>
          <Card
            title="Landing Page - Web"
            p1="Landing Page o Web de alto rendimiento optimizada para que convierta a sus visitantes en clientes"
            p2="Soluciones personalizadas para tu negocio"
            p3="Funcionalidad excepcional y rendimiento"
            p4="Interfaz intuitiva y amigable"
            p5="Adaptabilidad a diferentes dispositivos"
            p6="Experiencia de usuario única"
            p7="Escalabilidad y crecimiento"
          ></Card>
          <Card
            title="Ecommerce"
            p1="La construcción y gestión de una tienda en línea que convierte visitantes en clientes satisfechos"
            p2="Crea tu propia tienda virtual"
            p3="Aumenta tus ventas en línea"
            p4="Administración fácil y segura"
            p5="Diseño atractivo y profesional"
            p6="Integración de pasarelas de pago"
            p7="Amplía tu alcance y llega a más clientes"
          ></Card>
          <Card
            title="Meta Ads"
            p1="El uso de campañas en Meta Ads para alcanzar a una audiencia más amplia y convertirla en Ventas o Potenciales Clientes "
            p2="Experiencia móvil de primera clase"
            p3="Funcionalidad adaptada a cada plataforma"
            p4="Diseño atractivo y intuitivo"
            p5="Optimización de rendimiento"
            p6="Lanzamiento en las tiendas de aplicaciones"
            p7="Conexión directa con tu audiencia"
          ></Card>
          <Card
            title="Google Ads"
            p1="La gestión de campañas en Google Ads que amplían su alcance y atraen a nuevos clientes"
            p2="Aumenta la visibilidad de tu sitio web"
            p3="Mejora tu posicionamiento en Google"
            p4="Genera tráfico orgánico relevante"
            p5="Investigación de palabras clave"
            p6="Optimización técnica y de contenido"
            p7="Análisis y seguimiento de resultados"
          ></Card>
          <Card
            title="Social Media"
            p1={
              "Amplifica tu presencia y atrae una audiencia comprometida con la gestión de redes sociales"
            }
          ></Card>
          <Card
            title="Content Creation and Management "
            p1="Crea contenido atractivo y relevante para conectar con tu audiencia"
          ></Card>
          <Card
            title="Newsletter and Emailing"
            p1="Crea contenido atractivo y relevante para conectar con tu audiencia"
          ></Card>{" "}
          <Card
            title="Linkedin Automatization"
            p1="Amplía tu red en LinkedIn de forma automatizada, incluyendo la prospección a clientes potenciales"
          ></Card>
          <Card
            title="Data Bases"
            p1="La obtención automatizada de datos y detalles específicos de ubicaciones desde Google Maps mediante técnicas de scraping.
"
          ></Card>
          <Card
            title=" Data analitycs"
            p1="Identifica como interactuan tus clientes potenciales con herramientas como google analitycs"
          ></Card>
          <Card
            title=" Consultoria"
            p1="Servicio de asesoramiento especializado para la toma de decisiones estratégicas"
          ></Card>

          
        </div>
      </section>
    </>
  );
};

export default Servicios;
