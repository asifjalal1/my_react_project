// import '../assets/css/hover_card.css';
import Styles from '../assets/css/HoverCard.module.css';

function HoverCards() {
  return (
    <>
        <div className={Styles.list}>
            <div className={Styles.item}><img src="./images/logo1.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo2.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo3.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo4.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo5.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo6.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo7.jpg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo8.jpeg" alt="Logo" /></div>
            <div className={Styles.item}><img src="./images/logo9.jpeg" alt="Logo" /></div>
        </div>
    </>
  )
}

export default HoverCards