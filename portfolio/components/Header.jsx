import { useState } from "react";
import Menu from "./Menu";
import menu_icon from "../assets/menu.png";
import close from "../assets/close.png";

export default function Header( {onMenuEvent} ) {
    const [menuToggle, setMenuToggle] = useState(true);

    const handleCLick = (e) => {
        e.preventDefault();
        setMenuToggle(!menuToggle);
        onMenuEvent(menuToggle);
    }

    return(
        <header>
            <h1 className="mg-pd-0"><a href="#home">e<span>.</span>valencia</a></h1>
            <Menu />
            <img style={{display: `${menuToggle? 'block': 'none'}`}} width={30} height={30} src={menu_icon} alt="menu icon" onClick={ (e) => handleCLick(e)} />
            <img style={{display: `${menuToggle? 'none': 'block'}`}} width={30} height={30} src={close} alt="close menu" onClick={(e) => handleCLick(e)}/>
        </header>
    )
}