import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

const App = () => {

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const openSidebar = () =>{
    setSideBarOpen(true);
  };
  const closeSideBar = () =>{
    setSideBarOpen(false);
  };

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSideBar={openSidebar}/>
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSideBar}/>
    </div>
  );
}

export default App;
