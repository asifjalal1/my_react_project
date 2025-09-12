import { BrowserRouter, Routes, Route } from "react-router-dom";
import SodaMarkUp from './Components/SodaMarkUp';
import HoverCards from './Components/HoverCards';
import ScrollEffect from './Components/ScrollEffect';
import ImageRotate from './Components/ImageRotate';
import ClipPath from './Components/ClipPath';
import AnimationSVG from './Components/AnimationSVG';
import Slider from './Components/Slider';
import SimpleDashboard from './Components/SimpleDashboard'
import AdvanceDashboard from './Components/AdvanceDashboard'
// import DashboardProfileLogo from './Components/DashboardProfileLogo';
import Layout from "./pages/Layout";
// import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<DashboardProfileLogo />} /> */}
            <Route index element={<SodaMarkUp />} />
            <Route path="hover-cards" element={<HoverCards />} />
            <Route path="scroll-effect" element={<ScrollEffect />} />
            <Route path="image-rotate" element={<ImageRotate />} />
            <Route path="clip-path" element={<ClipPath />} />
            <Route path="animation-svg" element={<AnimationSVG />} />
            <Route path="*" element={<Layout />} />
          </Route>
          {/* Route without layout — opens in new tab */}
          <Route path="slider" element={<Slider />} />
          <Route path="simple-dashboard" element={<SimpleDashboard />} />
          <Route path="advance-dashboard" element={<AdvanceDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
