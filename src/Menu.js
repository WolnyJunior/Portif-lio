import React from 'react'
import './App.css'

function Menu(props){
    const linkLinks = props.links.map((link, index)=> <li className='m-3' key={index}>{link}</li>)

    return(
        <ul className="menu d-flex list-unstyled fs-6 align-items-center">{linkLinks}</ul>
    )
}

export default Menu