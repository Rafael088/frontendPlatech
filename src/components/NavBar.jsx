import imgLogo from '../assets/platech2.png'
function NavBar() {
    return ( 
        <div className="contNavBar">
            <a href='#services'>
                Servicios
            </a>
            
            <img src={imgLogo} alt="Platech"/>
            
            <a href='#contact'>
                Contacto
            </a>
        </div>
     );
}

export default NavBar;