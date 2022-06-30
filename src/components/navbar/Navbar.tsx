import "./Navbar.css";
import avatar from "../../assets/avatar.png";
import React from 'react';

const Navbar = ({ sidebarOpen, openSideBar }: any) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSideBar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>

      <div className="navbar__left">
        <a href="#top">Produtos</a>

        <a href="#top">Usuários</a>

        <a href="#top" className="active_link">
          Produtos
        </a>
      </div>

      <div className="navbar__right">
        <a href="#top">
          <i className="fa fa-search"></i>
        </a>

        <a href="#top">
          <i className="fa fa-clock-o"></i>
        </a>

        <a href="#top">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
