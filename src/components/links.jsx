import React from "react";

import "./Links.css"

export const Links = () =>{
    return <div className="linksCont">
    <div className="listPart">
        <h1>Links</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul className="list">
            <li>active</li>
            <li>link</li>
            <li>link</li>
            <li>disabled</li>
        </ul>
    </div>
    <div className="imagePart">
        <h1>TITLE HEADING</h1>
        <p>Title description, Sep 2, 2020</p>
        <img src="/tyler.png" alt="Image"/>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    </div>
}

