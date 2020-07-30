import React from 'react'
import './menu.css'

import { Link } from 'react-router-dom'
import Logo from '../../assets/logotipo.png'

//import ButtonLink from '../ButtonLink'
import Button from '../Button/index'

export default function Menu() {
    return (
        <nav className='menu'>
            <Link to="/" >
                <img className='logo' src={Logo} alt="logotipo videoflix" />
            </Link>


            <Button as={Link} className="ButtonLink" to='/cadastro/video' >
                Novo Video
            </Button>


                
        </nav>
    )
}