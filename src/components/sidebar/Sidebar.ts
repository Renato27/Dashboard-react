/* eslint-disable jsx-a11y/anchor-is-valid */
import './Sidebar.css';

// @ts-expect-error TS(2307): Cannot find module '../../assets/logo.jpeg' or its... Remove this comment to see the full error message
import logo from '../../assets/logo.jpeg';

const Sidebar = ({
    sidebarOpen,
    closeSidebar
}: any) => {
    return (
        // @ts-expect-error TS(2304): Cannot find name 'div'.
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className='sidebar__title'>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__img'>
                    // @ts-expect-error TS(2304): Cannot find name 'img'.
                    <img src={logo} alt='logo'/>
                    // @ts-expect-error TS(2304): Cannot find name 'h1'.
                    <h1>Dashboard</h1>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'i'.
                <i 
                // @ts-expect-error TS(2304): Cannot find name 'onClick'.
                onClick={() => closeSidebar()}
                // @ts-expect-error TS(2304): Cannot find name 'className'.
                className="fa fa-times"
                // @ts-expect-error TS(2304): Cannot find name 'id'.
                id='sidebarIcon'
                // @ts-expect-error TS(2304): Cannot find name 'aria'.
                aria-hidden='true'
                ></i>
            </div>
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className='sidebar__menu'>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link active_menu_link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-minus-square'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Home</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'h2'.
                <h2>ADMIN</h2>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-tachometer'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Área administrativa</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-building'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Lojas</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-archive'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Produtos</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-bars'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Categorias</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-cutlery'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Pedidos</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'h2'.
                <h2>PESSOAS</h2>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-male'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Administradores</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-user-circle'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Usuários</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-money'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Pagamentos e custos</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-tasks'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>A plataforma</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__link'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-file-text'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Política de privacidade</a>
                </div>
                // @ts-expect-error TS(2304): Cannot find name 'div'.
                <div className='sidebar__logout'>
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className='fa fa-power-off'></i>
                    // @ts-expect-error TS(2304): Cannot find name 'a'.
                    <a href='#'>Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;