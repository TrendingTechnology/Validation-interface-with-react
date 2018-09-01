import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import '../css/navigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isOpen: false,
            collapsed: true
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarToggler className="ml-2" onClick={this.toggleNavbar}/>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    <NavbarBrand href="/" className="mr-auto">F2E Bank</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Social</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>Admin</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Login</DropdownItem>
                                    <DropdownItem>Setting</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;