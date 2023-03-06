import React from "react";
import Sorin from "./Sorin";
import './App.css'

function Intro(props){
    return(
        <div className="intro container d-flex justify-content-center align-items-center 
        border border-primary-subtle mt-5">
            <apresentacao>
                <span className="ola">{props.ola}</span> <Sorin className="sorin ola"></Sorin>
                <h1>{props.intro}</h1>
            </apresentacao>
        </div>
    )}

export default Intro