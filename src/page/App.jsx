import Home from "./Home";
import PresetOne from "./PresetOne";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="App">
        <Home/>
        <PresetOne position={0} title="Da el primer Click" 
          text="Utiliza la industria 4.0  para digitalizar tu empresa o negocio."
            textBtn="Conectar"
          />
<<<<<<< HEAD
=======
        
>>>>>>> 877278f37f6cafad5f201999c8bf96afb226d001
    </section>
  );
}

export default App;
