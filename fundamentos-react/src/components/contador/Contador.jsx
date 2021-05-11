import React, {Component} from 'react'
import Buttons from './Buttons'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'


export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
        
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return(
            <div className = 'contador'>
                
                <PassoForm passo={this.state.passo} onPassoChange={this.mudarPasso}></PassoForm>
                <Display valor={this.state.valor}></Display>
                <Buttons onInc={this.inc} onDec={this.dec}></Buttons>
                
            </div>
        )
    }
}