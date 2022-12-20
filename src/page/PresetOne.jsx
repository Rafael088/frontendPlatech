import ButtonMain from "../components/ButtonMain"
import imgOne from '../assets/6477441.jpg'
import imgTwo from '../assets/robot-hand-finger-ai-background-technology-graphics.jpg'

function PresetOne({rutaIMg, text, title, textBtn, position}) {
    return ( 
        <section className="contPreset" id="presetOne">
            <div className={position === 1? "contContent rigth": "contContent left"}>
                <div className="contImg">
                    <img className="img" src={position === 1 ? imgOne:imgTwo} alt={title}/>
                </div>
                <div className="contBody">
                    <h3>{title}</h3>
                    <p className="text">{text}</p>
                    <ButtonMain text={textBtn}/>
                </div>
            </div>
        </section>
     );
}

export default PresetOne;