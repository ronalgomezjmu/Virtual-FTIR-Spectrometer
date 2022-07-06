import React from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup.jsx";

const Dropdown = ({submenus, dropdown}) => {

    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => {
                    if (submenu.button){
                        return(
                            <li key={index} className="menu-items">
                                <Popup label={submenu.label} title={submenu.title} text={submenu.text} />
                            </li>
                        );
                    } else {
                        return (
                            <li key={index} className="menu-items">
                                <Link to={submenu.link ?? ''} >{submenu.label}</Link>
                            </li>
                        );
                    }
                
            })}
        </ul>
    );

}

export default Dropdown;