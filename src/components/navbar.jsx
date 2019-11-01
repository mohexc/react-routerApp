import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/products">Products</a></li>
        <li className="nav-item"><a className="nav-link" href="/posts/2018/06">Posts</a></li>
        <li className="nav-item"><a className="nav-link" href="/admin">Admin</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
