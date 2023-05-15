import React, { useEffect, useRef } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";

import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GrContactInfo } from "react-icons/gr";

import "./Navbar.css";

function MyNavbar({ setOpenCart, openCart }) {
  const [searchActive, setSearchActive] = React.useState(false);
  const searchInput = useRef(null);
  const cart = useSelector((state) => state.cart);

  const expand = "lg";

  return (
    <>
      <Navbar bg="light" expand={expand} fixed="top" className="bg-transparent">
        <Container fluid>
          <Link to="/" className="navbar-brand">
            <Navbar.Brand>MyShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="d-flex justify-content-between"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                MyShop
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className={"nav-link"} to="/shop">
                  Shop
                </Link>
                <Link className="nav-link" to="/contact">
                  {" "}
                  Contact
                </Link>
              </Nav>
              <div className="d-flex align-items-center gap-3 ">
                <div className={`search ${searchActive ? "active" : ""}`}>
                  <AiOutlineSearch
                    onClick={() => {
                      setSearchActive(!searchActive);
                      searchInput.current.focus();
                    }}
                  />
                  <input type="text" ref={searchInput} />
                </div>
                <div className="cart" onClick={() => setOpenCart(!openCart)}>
                  <AiOutlineShoppingCart />
                  <span className="products-count">{cart.items.length}</span>
                </div>
                <div className="info">
                  <GrContactInfo />
                </div>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
