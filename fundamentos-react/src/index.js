import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import WithParameter from './components/WithParameter'

ReactDOM.render(
    <div>
    <First></First>,
    <WithParameter></WithParameter>, 
    </div>,
    document.getElementById('root')  
)