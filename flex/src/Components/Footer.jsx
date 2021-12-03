import React from "react";
import "./index.css";

const Footer = () =>{
    return(
        <div className="container">
            <div className="fitem ff">
                <h2>Title1</h2>
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul>
            </div> 
            <div className="fitem">
            <h2>Title2</h2>
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul>
                </div> 
            <div className="fitem">
                <h2> Title3</h2>  
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul></div> 
            <div className="fitem"> 
            <h2>Title4</h2>  
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
            </ul></div> 
        </div>

    )
}
export default Footer;