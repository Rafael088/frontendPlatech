import ButtonMain from "./ButtonMain";

<<<<<<< HEAD

function Cards({text, img, title}) {
    
=======
function Cards({text, img, title}) {
>>>>>>> 877278f37f6cafad5f201999c8bf96afb226d001
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