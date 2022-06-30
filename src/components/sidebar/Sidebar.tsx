import "./Sidebar.css";
import logo from "../../assets/logo.png";
import React from 'react';

const Sidebar = ({ sidebarOpen, closeSidebar }: any) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Dashboard</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-minus-square"></i>

          <a href="#top">Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i className="fa fa-tachometer"></i>

          <a href="#top">Área administrativa</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-building"></i>

          <a href="#top">Lojas</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-archive"></i>

          <a href="#top">Produtos</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-bars"></i>

          <a href="#top">Categorias</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-cutlery"></i>

          <a href="#top">Pedidos</a>
        </div>

        <h2>PESSOAS</h2>

        <div className="sidebar__link">
          <i className="fa fa-male"></i>

          <a href="#top">Administradores</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-user-circle"></i>

          <a href="#top">Usuários</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-money"></i>

          <a href="#top">Pagamentos e custos</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-tasks"></i>

          <a href="#top">A plataforma</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-file-text"></i>

          <a href="#top">Política de privacidade</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#top">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
