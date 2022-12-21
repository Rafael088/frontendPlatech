import Cards from "./Cards";
import img1 from '../assets/sara-kurfess-6lcT2kRPvnI-unsplash.jpg'

import img2 from '../assets/jason-leung-HBGYvOKXu8A-unsplash.jpg'

import img3 from '../assets/antonio-janeski-CHVTt0aGbx0-unsplash.jpg'

import img4 from '../assets/luke-chesser-JKUTrJ4vK00-unsplash.jpg'
function Services() {
    return ( 
        <section className="contServices" id="services" >
            <h3>Nuestros Servicios</h3>
            <div className="contBody">
                <Cards text="Hacemos paginas modernas para comercio electrónico o blog de información." title="Página Web" img={img4}/>
                <Cards text="Hacemos aplicaciones para computadores y celulares." title="Aplicaciones" img={img1}/>
            </div>
            <div className="contEfect">

            </div>
            <div className="contBody">
                <Cards text="Creamos y entrenamos Inteligencia Artificial para su aplicabilidad " title="Inteligencia Artificial" img={img2}/>
                <Cards text="Creamos soluciones a problemas con Industria 4.0 dentro de las empresas" title="Soluciones" img={img3}/>
            </div>
        </section>
     );
}

export default Services;