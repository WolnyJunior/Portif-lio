import React from "react";
import Typewriter from 'typewriter-effect'
import './App.css'

function Sorin(props) {
    return (
        <div className="sorin text-info">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("Sorin Junior").start();
                }}
            />
        </div>
    )
}

export default Sorin
