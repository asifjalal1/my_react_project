import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SodaMarkUp from './Components/SodaMarkUp'
import HoverCards from './Components/HoverCards'
import ScrollEffect from './Components/ScrollEffect'
import ImageRotate from './Components/ImageRotate'
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SodaMarkUp />} />
            <Route path="hover-cards" element={<HoverCards />} />
            <Route path="scroll-effect" element={<ScrollEffect />} />
            <Route path="image-rotate" element={<ImageRotate />} />
            <Route path="*" element={<Layout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
