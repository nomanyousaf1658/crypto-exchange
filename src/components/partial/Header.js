import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { loggedInUser } from '../redux/actions/userAction';
import {useDispatch} from 'react-redux';

function Header(props) {
    const dispatchLoggedInUserAction = useDispatch();

    const logoutUser = () => {
        props.addLoggedInUser(null);
        //Dispatch
        dispatchLoggedInUserAction(loggedInUser(null));
    };
    

    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link className="nav-brand" to="/">Assignment 1</Link>
                <Nav className="navbar-nav ms-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    {(!props.loggedInUser?.email) ? <Link className="nav-link" to="/login">Login</Link> : ''}
                    <Link className="nav-link" to="/">About Us</Link>
                    <Link className="nav-link" to="blog">Blog</Link>
                    {(props.loggedInUser?.email) ? <Link className="nav-link" to="/" onClick={logoutUser}>Logout</Link> : ''}
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
    </>;
}

export default Header;