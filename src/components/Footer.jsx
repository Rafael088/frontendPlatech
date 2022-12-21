
import { AiOutlineInstagram, AiOutlineWhatsApp, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
    return ( 
        <section className="Footer">
            <h3>Somos</h3>
            <div className="contBody">
                <b>Un equipo en búsqueda de la transformación digital de las empresas, ayudando al crecimiento comercial y tecnológico del país, con habilidades que apuntan a la nueva Generación Digital</b>
                <div className="contBtn">
                <a href='https://www.instagram.com/platechoficial' target="_blank" rel="noreferrer">
                    <AiOutlineInstagram className="icon"/>
                </a>
                <a href='www.instagram.com'>
                    <AiOutlineWhatsApp className="icon"/>
                </a>
                <a href='www.instagram.com'>
                    <FaLinkedinIn className="icon"/>
                </a>
                <a href='www.instagram.com'>
                    <AiFillYoutube className="icon"/>
                </a>
                </div>
            </div>
        </section>
     );
}

export default Footer;