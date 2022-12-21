import Allies from "../components/Allies";
import Footer from "../components/Footer";
import Form from "../components/Form";
import NavBar from "../components/NavBar"
import Services from "../components/Services";
import PresetOne from '../page/PresetOne'
function Home() {
  return (
    <section className="Home" id='home'>
        <NavBar/>
        <div className="contBody">
            <h1>Nueva generación de inteligencia</h1>
        </div>
        <PresetOne position={0} title="Da el primer Click" 
          text="Utiliza la industria 4.0  para digitalizar tu empresa o negocio."
            textBtn="Conectar"
          />
        <PresetOne position={1} title="¿Eres emprendedor?" 
          text='Te brindamos la mejor tecnología para apoyarte en tu crecimiento.'
          textBtn="Conocer Más"
        />
        <Allies/>
        <Services/>
        <Form/>
        <Footer/>
    </section>
  );
}

export default Home;
