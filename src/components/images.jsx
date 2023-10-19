import React from "react";
import "./images.css"
export const Images = () =>{
    return <div className="wholeImg">
        <div className="FirstHalf">
        <h1>about me</h1>
        <p>photo of me</p>
        <img className="firstImg" src="/tyler.png" alt="Image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="secondHalf">
            <h1>TITLE HEADING</h1>
            <p>Title description, Dec 7, 2020</p>
            <img className="secondImg" src="/tyler.png" alt="Image2"/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
}