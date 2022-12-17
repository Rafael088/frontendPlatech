import ButtonMain from "../components/ButtonMain"
import imgOne from '../assets/6477441.jpg'
import imgTwo from '../assets/robot-hand-finger-ai-background-technology-graphics.jpg'

function PresetOne({rutaIMg, text, title, textBtn, position}) {
    return ( 
        <section className={position === 1?"contPreset left":"contPreset right"} id="presetOne">
            <div className="contImg">
                
            </div>
            <img className={position ===1 ? "img left": "img right"} src={position === 1 ? imgOne:imgTwo} alt={title}/>
            <div className="contBody">
                <h3>{title}</h3>
                <p>{text}</p>
                <ButtonMain text={textBtn}/>
            </div>
        </section>
     );
}

export default PresetOne;