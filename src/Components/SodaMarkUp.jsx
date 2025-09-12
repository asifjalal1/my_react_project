import Styles from '../assets/css/SodaMarkup.module.css';
// import logo6 from '../assets/sodamarkup/logo6.png';
// import logo6 from '../assets/sodamarkup/bird2.png';
// import logo6 from '../assets/sodamarkup/girl.png';

function SodaMarkUp() {
  return (
    <>
        <div className={Styles.banner}>
          <div className={Styles.product}>
              <div className={Styles.soda} style={{"--url": "url(./images/bird2.png)"}}></div>
              <div className={Styles.soda} style={{"--url": "url(./images/girl.png)"}}></div>
              {/* <div className="soda"></div> */}
          </div>
        </div>
    </>
  )
}

export default SodaMarkUp

 {/* <img src={logo6} alt="Logo" /> */}
