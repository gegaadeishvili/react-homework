import React from "react";

export const Links = () =>{
    return <div className="whole" style={{display:"flex", gap: 400,paddingLeft:100}}>
    <div className="firtHalf">
        <h1>Links</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <ul style={{display:"flex", flexDirection:"column", gap:30}}>
            <li>active</li>
            <li>link</li>
            <li>link</li>
            <li>disabled</li>
        </ul>
    </div>
    <div className="secondHalf">
        <h1>TITLE HEADING</h1>
        <p>Title description, Sep 2, 2020</p>
        <img src="/tyler.png" alt="Image" style={{width:500,height:300}} />
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    </div>
}

