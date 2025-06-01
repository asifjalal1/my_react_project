import Styles from '../assets/css/Sidebar.module.css';
import { Outlet, Link, useMatch } from "react-router-dom";
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import AppRegistration from '@mui/icons-material/AppRegistration';
import Home from '@mui/icons-material/Home';
import Backup from '@mui/icons-material/Backup';
import Dining from '@mui/icons-material/Dining';
import Dry from '@mui/icons-material/Dry';
import Fastfood from '@mui/icons-material/Fastfood';
import { useState } from "react";

const Layout = () => {
  const  [toggleclass, settoggleclass] = useState(true);
  return (
    <>
      <div className={`${Styles.main_div} ${toggleclass ? Styles.sb_expanded : ''}`}>
        <aside className="bg-[#aa20ff]">
          <nav className="">
            <ul className="">
              <li>
                <Link to="/" className={useMatch('/') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <Home />
                    <span className={Styles.title}>Home</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/hover-cards" className={useMatch('/hover-cards') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <AppRegistration />
                    <span className={Styles.title}>HoverCards</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/scroll-effect" className={useMatch('/scroll-effect') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <Backup />
                    <span className={Styles.title}>ScrollEffect</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/image-rotate" className={useMatch('/image-rotate') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <Dry />
                    <span className={Styles.title}>ImageRotate</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/clip-path" className={useMatch('/clip-path') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <Dining />
                    <span className={Styles.title}>ClipPath</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/animation-svg" className={useMatch('/animation-svg') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <Fastfood />
                    <span className={Styles.title}>Animation svg</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/slider" className={useMatch('/slider') ? Styles.active : ''}>
                  <span className={Styles.flex}>
                    <Fastfood />
                    <span className={Styles.title}>Slider</span>
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" onClick={(e)=>{
                  e.preventDefault();
                  settoggleclass(() => !toggleclass);
                }}>
                  <span className={Styles.flex}>
                    <KeyboardDoubleArrowRight className={Styles.toggle_icon}/>
                    <span className={Styles.title}>Toggle</span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
        <Outlet />
        </main>
      </div>

    </>
  )
};
export default Layout;