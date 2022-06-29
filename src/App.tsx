import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
// @ts-expect-error TS(6142): Module './components/main/Main' was resolved to '/... Remove this comment to see the full error message
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="container">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Navbar sidebarOpen={sidebarOpen} openSideBar={openSidebar}/>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Main />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSideBar}/>
    </div>
  );
}

export default App;
