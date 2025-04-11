import { useState } from 'react'
import '../sodamarkup.css'
// import logo6 from '../assets/sodamarkup/logo6.png';
// import logo6 from '../assets/sodamarkup/bird2.png';
// import logo6 from '../assets/sodamarkup/girl.png';

function SodaMarkUp() {
  const [count, setCount] = useState(0)
  return (
    <>
        <div className="banner">
          <div className="product">
              <div className="soda" style={{"--url": "url(./sodamarkup/bird2.png)"}}></div>
              <div className="soda" style={{"--url": "url(./sodamarkup/girl.png)"}}></div>
              {/* <div className="soda"></div> */}
          </div>
        </div>
    </>
  )
}

export default SodaMarkUp

 {/* <img src={logo6} alt="Logo" /> */}
