/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.css';

// @ts-expect-error TS(2307): Cannot find module '../../assets/avatar.png' or it... Remove this comment to see the full error message
import avatar from '../../assets/avatar.png';

const Navbar = ({
    sidebarOpen,
    openSideBar
}: any) => {
    return ( 
        // @ts-expect-error TS(2304): Cannot find name 'nav'.
        <nav className="navbar">
            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="nav_icon" onClick={() => openSideBar()}>
                // @ts-expect-error TS(2304): Cannot find name 'i'.
                <i className="fa fa-bars" aria-hidden='true'></i>
            </div>

            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="navbar__left">
                // @ts-expect-error TS(2304): Cannot find name 'a'.
                <a href="#">Produtos</a>
                // @ts-expect-error TS(2304): Cannot find name 'a'.
                <a href="#">Usuários</a>
                // @ts-expect-error TS(2304): Cannot find name 'a'.
                <a href="#" className="active_link">Produtos</a>
            </div>

            // @ts-expect-error TS(2304): Cannot find name 'div'.
            <div className="navbar__right">
                // @ts-expect-error TS(2304): Cannot find name 'a'.
                <a href="#">
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className="fa fa-search"></i>
                </a>
                // @ts-expect-error TS(2304): Cannot find name 'a'.
                <a href="#">
                    // @ts-expect-error TS(2304): Cannot find name 'i'.
                    <i className="fa fa-clock-o"></i>
                </a>
                // @ts-expect-error TS(2304): Cannot find name 'a'.
                <a href="#">
                    // @ts-expect-error TS(2304): Cannot find name 'img'.
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;