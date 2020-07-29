import React, { useState } from 'react'

import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


export default function CadastroCategoria() {

    const [ nomeDaCategoria, setNomeCategoria ] = useState('Filmes')


    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

                <form>
                    <label>
                        Nome da Categoria:
                        <input type="text"  placeholder={nomeDaCategoria}
                        onChange={function handler(infoEvento){
                            setNomeCategoria(infoEvento.target.value)
                        }}
                        />
                    </label>

                    <button>
                        Cadastrar
                    </button>
                </form>

                <Link to='/'>
                    ir para Homne
            </Link>
            </PageDefault>
        </>
    )
}