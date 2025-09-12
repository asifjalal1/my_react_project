// import '../assets/css/clip-path.css';
import Styles from '../assets/css/ClipPath.module.css';

function clipPath() {
    return (
        <>
            <div className="flex justify-center">
                <section className={`${Styles.grid} ${Styles.grid_1}`}>
                    <div className={`${Styles.clip_image} ${Styles.circle}`}>
                        <img src="./images/birdcouple.png" alt="Logo" className={Styles.clip_img} />
                    </div>
                    <div className={`${Styles.clip_image} ${Styles.ellipse}`}>
                        <img src="./images/birdcouple.png" alt="Logo" className={Styles.clip_img} />
                    </div>
                    <div className={`${Styles.clip_image} ${Styles.inset}`}>
                        <img src="./images/birdcouple.png" alt="Logo" className={Styles.clip_img} />
                    </div>
                    <div className={`${Styles.clip_image} ${Styles.polygon}`}>
                        {/* <img src="./images/birdcouple.png" alt="Logo" className={Styles.clip_img} /> */}
                    </div>
                    <div className={`${Styles.clip_image} ${Styles.path}`}>
                        <img src="./images/birdcouple.png" alt="Logo" className={Styles.clip_img} />
                    </div>

                    <div className={`${Styles.clip_image} ${Styles.path2}`}>
                        <img src="./images/birdcouple.png" alt="Logo" className={Styles.clip_img} />
                    </div>
                </section>
            </div>
        </>
    )
}
export default clipPath