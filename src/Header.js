import React from 'react'
import Menu from './Menu'
import './App.css'

function Header(props){
    return(
        <header className='header text-warning bg-dark d-flex justify-content-between p-5'>
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
        </header>
    )
}

export default Header