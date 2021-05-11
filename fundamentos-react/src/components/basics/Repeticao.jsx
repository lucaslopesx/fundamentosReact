/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import '../data/products'
import products from '../data/products'

export default props => {

    function getProdutosListItem() {
        return products.map(prod =>{
            return <li key= {prod.id}>
                {prod.id} - {prod.nome} - R${prod.preco}</li>
        })
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}