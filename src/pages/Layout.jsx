import { Outlet, Link } from "react-router-dom";
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import AppRegistration from '@mui/icons-material/AppRegistration';
import Home from '@mui/icons-material/Home';
import Backup from '@mui/icons-material/Backup';
import Dining from '@mui/icons-material/Dining';
import Dry from '@mui/icons-material/Dry';
import Fastfood from '@mui/icons-material/Fastfood';
import '../assets/css/sidebar.css';
import { useState } from "react";


const Layout = () => {
  const  [toggleclass, settoggleclass] = useState(true);
  return (
    <>
      <div className={`main-div ${toggleclass ? 'sb-expanded' : ''}`}>
        <aside className="bg-[#aa20ff]">
          <nav className="">
            <ul className="">
              <li>
                <Link to="/" className="active">
                  <span className="flex">
                    <Home />
                    <span className="title">Home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/hover-cards">
                  <span className="flex">
                    <AppRegistration />
                    <span className="title">HoverCards</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/scroll-effect">
                  <span className="flex">
                    <Backup />
                    <span className="title">ScrollEffect</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/image-rotate">
                  <span className="flex">
                    <Dry />
                    <span className="title">ImageRotate</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/clip-path">
                  <span className="flex">
                    <Dining />
                    <span className="title">ClipPath</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/animation-svg">
                  <span className="flex">
                    <Fastfood />
                    <span className="title">Animation svg</span>
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" onClick={(e)=>{
                  e.preventDefault();
                  settoggleclass(() => !toggleclass);
                }}>
                  <span className="flex">
                    <KeyboardDoubleArrowRight className="toggle-icon"/>
                    <span className="title">Toggle</span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
        {/* <Outlet /> */}
        </main>
      </div>

    </>
  )
};
export default Layout;