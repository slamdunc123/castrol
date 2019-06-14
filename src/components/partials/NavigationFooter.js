import React, { Component } from 'react';

import { Link } from 'react-router-dom'; // Links only are required in this component
import {
    Collapse,
    Navbar,
    NavbarToggler,
    // NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class NavigationFooter extends Component {
    constructor(props) {
        super(props);

        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
        this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
        this.state = {
            isOpen: false
        };
    }

    // toggle burger menu when clicked
    toggleBurgerMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });


    }
    // toggle burger menu when menu link is clicked
    closeBurgerMenu() {
        if (this.state.isOpen === true) {
            this.toggleBurgerMenu();

        }
    }

    render() {
        return (
                <Navbar className="navbar-footer navbar-expand-md navbar-dark">
                    {/* <NavbarBrand href="/">CASTROL'S EFFICIENCY CALCULATOR</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggleBurgerMenu} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mr-auto" navbar>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/intro">Introduction</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/fleetinputs">Fleet Inputs</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/results">Results</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link className="nav-link" onClick={(e) => { this.closeBurgerMenu(e) }} to="/summary">Summary</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
        );
    }
}

export default NavigationFooter;


