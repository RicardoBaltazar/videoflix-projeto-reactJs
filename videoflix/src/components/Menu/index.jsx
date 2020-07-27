import React from 'react'
import './menu.css'

import Logo from '../../assets/logo.png'

export default function Menu() {
    return (
        <nav>
            <a href="/" className='menu'>
                <img className='logo' src={Logo} alt="logotipo videoflix" />
            </a>

            <a href="/" className='ButtonLink'>
                Novo Video
            </a>
        </nav>
    )
}