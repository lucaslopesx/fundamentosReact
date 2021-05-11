/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Children from './Children'

export default props => 
    <div>
        <Children sobrenome = {props.sobrenome}>João</Children>
        <Children {...props}>Maria</Children>
        <Children sobrenome = 'Silva'>Pedro</Children>

    </div>