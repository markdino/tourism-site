/** @format */

import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button,
} from 'reactstrap'
import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.handleScroll = this.handleScroll.bind(this)

        this.state = {
            isOpen: false,
            scrolledPast: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll() {
        const scrolledPast = window.scrollY > window.innerHeight
        if (scrolledPast !== this.state.scrolledPast) {
            this.setState({ scrolledPast })
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render() {
        const { scrolledPast } = this.state
        const navbarClassName = scrolledPast
            ? 'header__navbar navDark scrolled'
            : 'header__navbar navDark'

        return (
            <div>
                <Navbar
                    color='faded'
                    dark
                    expand='md'
                    fixed={`top`}
                    className={navbarClassName}
                >
                    <Container>
                        <NavbarBrand href='#' className='header__brand'>
                            Manila Tourism
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='header__nav ml-auto' navbar>
                                <NavItem>
                                    <NavLink
                                        href='#about'
                                        className='header__link'
                                    >
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href='#packageBody'
                                        className='header__link'
                                    >
                                        Package
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href='#servicesBody'
                                        className='header__link'
                                    >
                                        Services
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href='#contactBody'
                                        className='header__link'
                                    >
                                        Contact
                                    </NavLink>
                                </NavItem>
                                <Button
                                    color='success'
                                    className='header__login-btn'
                                >
                                    Login
                                </Button>{' '}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
