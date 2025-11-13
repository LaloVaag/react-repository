import { useState } from "react";

export default function Menu(){
    const [menu] = useState(["home", "projects", "contact"]);
    //const upperCaseMenu = menu.map(menu => menu.toUpperCase);
    //console.log(upperCaseMenu);
    return(
        <nav>
            <ul className="menu">
                {menu.map((menu, index) => (<li key={index} className="menu-item"><a href={`#${menu}`}>{menu.toUpperCase()}</a></li>))}
            </ul>
        </nav>
    )
}