import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/firts'
import withParameter from './components/withParameter'

ReactDOM.render(
    <div>
    <First></First>,
    <withParameter></withParameter>, 
    </div>,
    document.getElementById('root')  
)