import React from "react";

export const Images = () =>{
    return <div className="wholeImg" style={{display:"flex",gap:100,paddingLeft:100}}>
        <div className="FirstHalf" style={{display:"flex", flexDirection:"column",gap: 5}}>
        <h1>about me</h1>
        <p>photo of me</p>
        <img src="/tyler.png" alt="Image" style={{width:500, height: 300}} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="secondHalf" style={{display:"flex",flexDirection:"column",gap:5}}>
            <h1>TITLE HEADING</h1>
            <p>Title description, Dec 7, 2020</p>
            <img src="/tyler.png" alt="Image2" style={{width:500, height: 300}}/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
    </div>
}