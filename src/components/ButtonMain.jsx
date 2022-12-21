import 'aos/dist/aos.css'
import AOS from 'aos';

function ButtonMain({text}) {
    AOS.init();
    AOS.refresh();
    return ( 
        <a className="contBtnMain" href="/">
            <p>{text}</p>
        </a>
     );
}

export default ButtonMain;