import imgLogo from '../assets/platech2.png'
function NavBar() {
    return ( 
        <div className="contNavBar">
            <a href='/'>
                Servicios
            </a>
            
            <img src={imgLogo} alt="Platech"/>
            
            <a href='/'>
                Contacto
            </a>
        </div>
     );
}

export default NavBar;