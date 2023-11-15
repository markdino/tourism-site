/** @format */

import React, { Component } from 'react'
import '../App.css'
import Headline from '../components/Sections/Headline'
import Services from '../components/Sections/Services'
import Footer from '../components/Footer'
import AboutTravel from '../components/Sections/AboutTravel/AboutTravel'
import Packages from '../components/Sections/Packages/Packages'
import Contact from '../components/Sections/Contact'

class Home extends Component {
    render() {
        return (
            <div id='home'>
                <Headline />
                <AboutTravel />
                <Packages />

                
                <Services />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home
