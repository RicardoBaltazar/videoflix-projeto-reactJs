import React, { useState } from 'react'

import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


export default function CadastroCategoria() {

    const [categorias, setCategorias] = useState(['teste'])
    const [ nomeDaCategoria, setNomeCategoria ] = useState('Filmes')


    return (
        <>
            <PageDefault>
                <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

                <form onSubmit={function handleSubmit(infoEvento) {
                    infoEvento.preventDefault()
                    setCategorias([
                        ...categorias,
                        nomeDaCategoria
                    ])
                }}>
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

                <ul>
                    {categorias.map((categoria) => {
                        return (
                            <li key={categoria}>
                                {categoria}
                            </li>
                        )
                    })}
                </ul>

                <Link to='/'>
                    ir para Homne
                </Link>
            </PageDefault>
        </>
    )
}