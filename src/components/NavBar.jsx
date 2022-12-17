import imgLogo from '../assets/platech2.png'
function NavBar() {
    return ( 
        <div className="contNavBar">
            <a href='/'>
                Emprende
            </a>
            <a href='/'>
                Servicios
            </a>
            <a href='/'>
                Contacto
            </a>
            <img src={imgLogo} alt="Platech"/>
        </div>
     );
}

export default NavBar;