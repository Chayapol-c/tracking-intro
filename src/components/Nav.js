import logo from '../images/logo.svg'
import "../style/Nav.css"

export default function Nav() {
    return (
        <nav>   
            <img src={logo} />

            <ul>
                <li>Product</li>
                <li>Features</li>
                <li>Pricing</li>
                <li className="login">login</li>
            </ul>
        </nav>
    )
}
