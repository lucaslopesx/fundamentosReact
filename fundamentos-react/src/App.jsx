/* eslint-disable import/no-anonymous-default-export */
import './App.css'
import React from 'react'

import Card from './layout/Card'
import First from './basics/First'
import ComParametro from './basics/ComParametro'
import ComFilhos from './basics/ComFilhos'
import Repeticao from './basics/Repeticao'
import Condicional from './basics/Condicional'
import CondicionalComIf from './basics/CondicionalComIf'

export default (props) => (
    <div className = 'App'>
        <Card titulo = "#01 - Primeiro Componente">
            <First></First>
        </Card>
        <Card titulo = "#02 - Componente com parametros">
            <ComParametro 
                titulo = 'Esse é o titulo'
                subtitulo = 'Esse é o subtitulo' >
            </ComParametro>
        </Card>
        <Card titulo = "#03 - Componente com filho">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo = "#04 - Repeticao">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo = "#05 - Condicional v1.0">
            <Condicional numero = {11}></Condicional>
        </Card>
        <Card titulo = "#06 - Condicional v2.0">
            <CondicionalComIf numero = {4}> </CondicionalComIf>
        </Card>
        
    </div>
)