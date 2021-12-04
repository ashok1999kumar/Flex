import React from "react";
import "./Nav.css";

const Nav = () => {
    return (
        <>
            <nav>
                <div className="log">Brand</div>
                <input type="checkbox" id="click"/>
                <label for="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li> <a href="#">Service</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Registration</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;