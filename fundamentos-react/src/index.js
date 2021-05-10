import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import withParameter from './components/WithParameter'

ReactDOM.render(
    <div>
    <First></First>,
    <withParameter></withParameter>, 
    </div>,
    document.getElementById('root')  
)