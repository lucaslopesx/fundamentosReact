/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNum).fill(0));

    function gerarNumerosNaoContido(array) {
        const max = 60;
        const min = 1;
        const newNumber = parseInt(Math.random() * (max - min)) + min;
        return array.includes(newNumber)
            ? gerarNumerosNaoContido(array) : newNumber;
    }

    function gerarNumeros() {
        const newArray = Array(props.qtdNum)
            .fill(0)
            .reduce((a, e) => {
                const newNumber = gerarNumerosNaoContido(a);
                console.log(a, e, newNumber);
                return [...a, newNumber];
            }, [])
            .sort((a, b) => a - b);
        setNumeros(newArray);
    }
    return (
        <div>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar números</button>
        </div>
    );
};
