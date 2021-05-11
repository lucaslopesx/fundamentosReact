/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import React from "react";

import Card from "./components/layout/Card";
import First from "./components/basics/First";
import ComParametro from "./components/basics/ComParametro";
import ComFilhos from "./components/basics/ComFilhos";
import Repeticao from "./components/basics/Repeticao";
import Condicional from "./components/basics/Condicional";
import CondicionalComIf from "./components/basics/CondicionalComIf";
import Father from "./comunication/direct/Father";
import Super from "./comunication/indirect/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";



export default (props) => (
    <div className="App">
        <h1>Fundamentos ReactJS</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#011f4b">
                <First></First>
            </Card>
            <Card titulo="#02 - Componente com parametros" color="#fe9c8f">
                <ComParametro
                    titulo="Esse é o titulo"
                    subtitulo="Esse é o subtitulo"
                ></ComParametro>
            </Card>
            <Card titulo="#03 - Componente com filho" color="#35a79c">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repeticao" color="#851e3e">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#05 - Condicional v1.0" color="#f6cd61">
                <Condicional numero={11}></Condicional>
            </Card>
            <Card titulo="#06 - Condicional v2.0" color="#0e9aa7">
                <CondicionalComIf numero={4}> </CondicionalComIf>
            </Card>
            <Card titulo="#07 - Comunicação direta" color="#f37736">
                <Father sobrenome = 'Freitas'></Father>
            </Card>
            <Card titulo="#08 - Comunicação indireta" color="#854442">
                <Super></Super>
            </Card>
            <Card titulo="#09 - Input" color="#f6abb6">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Contador" color="#008744">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#11 - Mega-Sena" color="#ff3377">
                <Mega qtdNum={6}></Mega>
            </Card>
        </div>
        
    </div>
);
