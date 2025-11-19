import { useState } from "react";

export default function Menu( ){
    const [menu] = useState(["home", "projects", "contact"]);

    return(
        <nav>
            <ul className="menu mg-pd-0">
                {menu.map((menu, index) => (
                    <li key={index} className="menu-item"><a href={`#${menu}`}>{menu.toUpperCase()}</a></li>
                ))}
            </ul>
        </nav>
    )
}