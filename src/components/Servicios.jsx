import React from "react";
import Card from "./cardServices";
import { useTranslation } from "react-i18next";
import CardPartner from "./CardPartner";

const Servicios = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <>
      <section className="mt-20 relative ">
          <h4 className="custom-shadow text-7xl md:text-8xl font-black mb-96 md:mb-20 text-start ml-3 md:ml-64 text-black ">OUR <br />DIGITAL <br /> SERVICES</h4>
          <img className="absolute md:right-28 md:w-1/3 top-64 md:top-0 " src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/Our%20services%20(Post%20de%20Facebook%20(Horizontal)).png?alt=media&token=175179e0-ecd4-4e17-a16e-ea3fe17932bc" alt="celular" />
        <div className="flex gap-10 justify-center flex-wrap">
          <Card
            title="Landing Page"
            p1="Landing Page de alto rendimiento"
            p2="Captura la atención de tus visitantes"
            p3="Aumenta la conversión de tu sitio web"
            p4="Diseño personalizado y atractivo"
            p5="Estructura optimizada para resultados"
            p6="Impulsa tu marca y obtén más clientes"
            p7="Mejora la experiencia del usuario"
          ></Card>

          <Card
            title="Web App"
            p1="Desarrollo de Web Apps a medida"
            p2="Soluciones personalizadas para tu negocio"
            p3="Funcionalidad excepcional y rendimiento"
            p4="Interfaz intuitiva y amigable"
            p5="Adaptabilidad a diferentes dispositivos"
            p6="Experiencia de usuario única"
            p7="Escalabilidad y crecimiento"
          ></Card>

          <Card
            title="Ecommerce"
            p1="Diseño y desarrollo de tiendas online"
            p2="Crea tu propia tienda virtual"
            p3="Aumenta tus ventas en línea"
            p4="Administración fácil y segura"
            p5="Diseño atractivo y profesional"
            p6="Integración de pasarelas de pago"
            p7="Amplía tu alcance y llega a más clientes"
          ></Card>

          <Card
            title="App iOS-Android"
            p1="Desarrollo de aplicaciones para iOS y Android"
            p2="Experiencia móvil de primera clase"
            p3="Funcionalidad adaptada a cada plataforma"
            p4="Diseño atractivo y intuitivo"
            p5="Optimización de rendimiento"
            p6="Lanzamiento en las tiendas de aplicaciones"
            p7="Conexión directa con tu audiencia"
          ></Card>

          <Card
            title="SEO"
            p1="Optimización de motores de búsqueda (SEO)"
            p2="Aumenta la visibilidad de tu sitio web"
            p3="Mejora tu posicionamiento en Google"
            p4="Genera tráfico orgánico relevante"
            p5="Investigación de palabras clave"
            p6="Optimización técnica y de contenido"
            p7="Análisis y seguimiento de resultados"
          ></Card>

          <Card
            title="Ads"
            p1="Campañas publicitarias efectivas"
            p2="Llega a tu audiencia objetivo"
            p3="Amplifica el alcance de tu negocio"
            p4="Segmentación precisa del público"
            p5="Resultados medibles y seguimiento de campañas"
            p6="Optimización continua para maximizar el ROI"
            p7="Estrategias publicitarias personalizadas"
          ></Card>
          <CardPartner
            title="Partner Exclusivo de Future Agency"
            p1="Forma parte del futuro y Convertirte en Partner de Future Agency!"
            p2="Trabajaremos estrechamente contigo para crear una estrategia personalizada que te posicione como líder en tu industria y te conecte de manera efectiva con tu audiencia objetivo."
            p3="Ofrecemos un servicio premium altamente personalizado, trabajando con un número limitado de clientes para garantizar resultados sobresalientes."
            p4="Recibirás una guía detallada sobre cómo aprovechar al máximo la inteligencia artificial en tu estrategia de marketing, desbloqueando nuevas oportunidades y ventajas significativas en tu negocio."
            p5="Obtén resultados extraordinarios y haz realidad tus sueños digitales junto a nosotros."
            p7="¡El futuro está a tu alcance! Contacta con nosotros para más detalles y reserva tu lugar como Partner de Future Agency."
          ></CardPartner>
        </div>
      </section>
    </>
  );
};

export default Servicios;
