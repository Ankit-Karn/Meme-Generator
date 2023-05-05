import React, { useEffect, useState } from "react";
import "./meme.css";
import axios from 'axios';

export default function Meme(){

    const[pic, setPic] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemeImages, setAllMemeImages] = useState([])

    const url="https://api.imgflip.com/get_memes"
    
    useEffect(()=>{
        axios.get(url)
        .then(response => setAllMemeImages(response.data.memes))
        .catch(err => console.error(err))
    },[])

    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random()*memeArray.length)
        const url = memeArray[randomNumber].url
        setPic(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(e){
        const {name, value} = e.target
        setPic(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                type="text" 
                className="form-input"
                name="topText"
                value={pic.topText}
                onChange={handleChange}
                />

                <input 
                type="text" 
                className="form-input"
                name="bottomText"
                value={pic.bottomText}
                onChange={handleChange}
                />

                <button className="form-btn" onClick={getMemeImage}>Get new meme</button>
            </div>

            <div className="meme">
                <img src={pic.randomImage} className="meme--image" />
                <h2 className="meme--text top">{pic.topText}</h2>
                <h2 className="meme--text bottom">{pic.bottomText}</h2>
            </div>
        </main>
    )
}