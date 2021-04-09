import desktopLogo from '../images/logo.svg'
import hamLogo from '../images/icon-hamburger.svg'
import closeIcon from '../images/icon-close.svg'
import "../style/Nav.css"

export default function Nav() {
    return (
        <nav>   

            <img src={desktopLogo} />
            <img
                className="hamburger" 
                src={hamLogo} />
            <ul>
                <li>Product</li>
                <li>Features</li>
                <li>Pricing</li>
                <li className="login">login</li>
            </ul>
        </nav>
    )
}
