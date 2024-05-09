import "./NavBar.css"
import ElementList from "../ElementList/ElementList"
import GuitarImage from "../Images/GuitarImage/GuitarImage"
import CartWidget from "../Images/CartWidget/CartWidget"


const NavBar =() => {

    return (
        <nav>
            <GuitarImage/>
            <ElementList/>
            <CartWidget/>
        </nav>
    )
}

export default NavBar