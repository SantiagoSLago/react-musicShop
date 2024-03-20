import "./NavBar.css"
import ElementList from "../ElementList/ElementList"
import GuitarImage from "../Images/GuitarImage/GuitarImage"
import CartImage from "../Images/CartImage/CartImage"

const NavBar =() => {

    return (
        <nav>
            <GuitarImage/>
            <ElementList/>
            <CartImage purchasesNumber={5}/>
        </nav>
    )
}

export default NavBar