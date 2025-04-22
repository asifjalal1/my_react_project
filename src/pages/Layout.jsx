import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hover-cards">HoverCards</Link>
          </li>
          <li>
            <Link to="/scroll-effect">ScrollEffect</Link>
          </li>
          <li>
            <Link to="/image-rotate">ImageRotate</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
export default Layout;