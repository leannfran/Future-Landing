import Header from "./components/Header";
import Hero from "./components/hero";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Wsp";
import Presentation from "./components/Presentation";
import Team from "./components/Team";
import Clients from "./components/Clients"

const App = () => {
  
  return (
    <div className="max-w-100%">
      <Header/>
      <Hero/>
     < WhatsAppButton/>
      <Servicios/>
      <Clients/>
      <Presentation />
      <Team/>
      <Footer/>
     
    </div>
  );
}



export default App
