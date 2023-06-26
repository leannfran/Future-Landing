import Header from "./components/Header";
import Hero from "./components/hero";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Wsp";
import Presentation from "./components/Presentation";
import Team from "./components/Team";
import Clientes from "./components/Clientes";
import Desarrollo from "./components/Desarrollo";

const App = () => {
    <head>
      
    </head>
  
  return (
    <div className="max-w-full">
      <Header/>
      <Hero/>
     < WhatsAppButton/>
     <Desarrollo/>
      <Presentation />
      <Team/>
      <Servicios/>
      <Footer/>
     
    </div>
  );
}



export default App
