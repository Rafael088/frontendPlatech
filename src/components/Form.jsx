import imgLog from '../assets/platech3.png'
import ButtonMain from './ButtonMain';
function Form() {
    return ( 
        <section className="Form" id='contact'>
            
            <h3>Comencemos</h3>
            <div className="contBody">
                <div className='contContent'>
                    <b>Si eres emprendedor(a), nuestros servicios tienen ofertas especiales, Contactanos ya mismo</b>
                    <img src={imgLog} alt="Platech"/>
                    <ButtonMain text="Contactanos"/>
                </div>
                <form className="contForm">

                </form>
            </div>
            
        </section>
     );
}

export default Form;