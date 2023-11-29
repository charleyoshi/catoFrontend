import { Link } from "react-router-dom"
import Account from './Account'
import Theme from "./Theme"
const Navbar = () => {


    return (
        <header className="Navbar">
            <div className="container">
                <Link to="/">
                    <h4>cato</h4>
                </Link>
                <div className="right">
                    <Theme />
                    <Account />
                </div>
            </div>
        </header>
    )
}

export default Navbar