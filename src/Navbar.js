import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const cartobj = useSelector((store) => store.CartReducer);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Amazon
          </a>
         
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/additem">
                  Additem
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">
                <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"22px"}} className="me-1"/>Cart:<span>{cartobj.cartitems.length}</span>
                </a>
              </li>
            </ul>
          </div>
  </div>
</nav>

    </div>
  );
}
export default Navbar;
