/** @format */

import React, { Component } from 'react'
import './App.css'
import { Router, Link } from '@reach/router'
import Home from './pages/Home'
import Tour from './pages/Tour'

import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header />
                <Router>
                    <Home path='/' />
                    <Tour path='tour' />
                </Router>
            </div>
        )
    }
}

export default App
