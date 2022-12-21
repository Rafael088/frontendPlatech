import ButtonMain from "./ButtonMain";

function Cards({text, img, title}) {
    return ( 
        <div className="contCard">
            <div className="contCardHeader">
                <b>{title}</b>
                <img src={img} alt={title}/>
            </div>
            <div className="contCardBody">
                <p>{text}</p>
            </div>
            <div className="contCardFooter">
                <ButtonMain text='Contáctanos'/>
            </div>
        </div>
     );
}

export default Cards;