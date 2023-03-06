import React from 'react'
import Menu from './Menu'
import './App.css'
import Sorin from './Sorin'

function Header(props){
    return(
        <header className='header text-light bg-dark d-flex justify-content-between align-items-center'>
            <h2>{props.name}</h2>
            <Menu links={props.links}></Menu>
        </header>
    )
}

export default Header