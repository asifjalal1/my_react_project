import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="flex bg-[#000] text-white mt-10">
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
          <li>
            <Link to="/clip-path">ClipPath</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
export default Layout;