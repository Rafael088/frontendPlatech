
import Home from "./Home";
import PresetOne from "./PresetOne";

function App() {
  return (
    <section className="App">
        <Home/>
        <PresetOne position={0} title="Da el primer Click" 
          text="Utiliza la industria 4.0  para digitalizar tu empresa o negocio."
            textBtn="Conectar"
          />
        <PresetOne position={1} title="¿Eres emprendedor?" 
        text='Te brindamos la mejor tecnología para apoyarte en tu crecimiento.'
        textBtn="Conocer Más"
        />
    </section>
  );
}

export default App;
