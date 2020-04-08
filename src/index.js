import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'

import App from './components/App'

const container = document.getElementById('root')

ReactDOM.render(
            <Router>
                <App />
            </Router>
                , container)