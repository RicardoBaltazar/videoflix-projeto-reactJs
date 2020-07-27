import React from 'react'
import './menu.css'

import Logo from '../../assets/logo.png'

import ButtonLink from '../ButtonLink'

export default function Menu() {
    return (
        <nav className='menu'>
            <a href="/" >
                <img className='logo' src={Logo} alt="logotipo videoflix" />
            </a>


            <ButtonLink className="ButtonLink" href='/' >
                Novo Video
            </ButtonLink>
                
        </nav>
    )
}