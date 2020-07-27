import React from 'react'
import './menu.css'

import Logo from '../../assets/logo.png'

//import ButtonLink from '../ButtonLink'
import Button from '../Button/index'

export default function Menu() {
    return (
        <nav className='menu'>
            <a href="/" >
                <img className='logo' src={Logo} alt="logotipo videoflix" />
            </a>


            <Button as='a' lassName="ButtonLink" href='/' >
                Novo Video
            </Button>


                
        </nav>
    )
}