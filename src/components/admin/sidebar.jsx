import React from 'react';
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light px-2 col-2 mr-5">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link" to="/admin/posts">Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/users">User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;