import Header from "./components/Header";
import Hero from "./components/hero";
import Servicios from "./components/Servicios";
import Team from "./components/Team";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Wsp";

const App = () => {
  
  return (
    <div className="max-w-100%">
      <Header/>
      <Hero/>
     < WhatsAppButton/>
      <Servicios/>
      <Team />
      <Footer/>
     
    </div>
  );
}



export default App
