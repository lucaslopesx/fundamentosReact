/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
    return (
        <div>
            <h2>Contador</h2>
            <div>
                <label htmlFor="passoInput">Passo: </label>
                <input
                    id="passoInput"
                    type="number"
                    value={props.passo}
                    onChange={(e) => props.onPassoChange(+e.target.value)}
                />
            </div>
        </div>
    );
};
