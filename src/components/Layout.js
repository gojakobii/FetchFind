import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { useState, useContext } from 'react';

import FavoriteDogsContext from "../contexts/FavoriteDogsContext";
import Footer from "./Footer"
import NavBar from "./NavBar"

function Layout( props ) {
    const [favorites, setFavorites] = useState([]);

    return (
        <div className="bg-gradient-radial from-[#eb5d11] to-[#FBA919]">
            <NavBar />
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="Fetch Find"
                            // src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/find">Find</Nav.Link>
                        <Nav.Link as={Link} to="/favorites">Favorites</Nav.Link>
                        <NavBar />
                    </Nav>
                </Container>
            </Navbar> */}
            <div>
                <FavoriteDogsContext.Provider value={[favorites, setFavorites]}>
                    <Outlet/>
                </FavoriteDogsContext.Provider>
            </div>
        <Footer/>
        </div>
    );
}

export default Layout;
