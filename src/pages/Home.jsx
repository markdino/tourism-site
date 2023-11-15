/** @format */

import React, { Component } from 'react'
import '../App.css'
import Services from '../components/Sections/Services'
import Footer from '../components/Footer'
import AboutTravel from '../components/Sections/AboutTravel/AboutTravel'
import Packages from '../components/Sections/Packages/Packages'
import Contact from '../components/Sections/Contact'
import HeadlineHome from '../components/Sections/Headline/HeadlineHome'

class Home extends Component {
    render() {
        return (
            <div id='home'>
                <HeadlineHome />
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
