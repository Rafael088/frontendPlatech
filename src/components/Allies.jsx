import imgC from '../assets/checPng.png'
import imgS from '../assets/susuerte.png'
function Allies() {
    return ( 
        <section className="contAllies">
            <h3>Aliados</h3>
            <div className="contBody">
                <div className="contName">
                    <div className="cardName">
                        <b>Chec</b>
                    </div>
                    <div className="cardName">
                        <b>Susuerte</b>
                    </div>
                    
                </div>
                <div className="contCards">
                    <div className="card">
                        <div className="contCardHeader">
                            <img src={imgC} alt="chec"/>
                            <b>IA, Hardware y Plataforma Web</b>
                        </div>
                        <div className="contCardBody">
                            <p>Creamos IA, para predecir fallos atmosféricos en las redes eléctricas del departamento de caldas, siendo Platech finalista del Programa Innóvate Chec.</p>
                        </div>
                        <div className="contCardFooter">
                            <b>2022</b>
                        </div>
                    </div>
                    <div className="card">
                        <div className="contCardHeader">
                            <img src={imgS} alt="susuerte"/>
                            <b>IA, Hardware y Software</b>
                        </div>
                        <div className="contCardBody">
                            <p>Creamos IA, para el reconocimiento digital de documentos físicos y comprobar su validez, en el programa Open Mas siendo Platech Finalistas.</p>
                        </div>
                        <div className="contCardFooter">
                            <b>2022</b>
                        </div>
                    </div>
                </div>
                <div className="contFooter">

                    <b>Seguiremos plantando nuestra semilla transformadora donde sea que vayamos.</b>
                    <div className='bord'>

                    </div>
                    <div className='contFilter'>

                    </div>
                </div>
                <div className="contPass">
                    <div className='contImg'>

                    </div>
                    <div className='contImg'>

                    </div>
                    <div className='contImg'>

                    </div>
                    <div className='contImg'>

                    </div>
                    <div className='contImg'>

                    </div>
                </div>
            </div>
        </section>
     );
}

export default Allies;