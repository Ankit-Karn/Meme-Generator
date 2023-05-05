import React from "react";
import "./header.css"

export default function Header(){


    return(
        <header className="header">
            <img className="header-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png" />
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-project">React Project</h4>
        </header>
    )
}