import '../assets/css/clip-path.css';

function clipPath() {
    return (
        <>
            <div className="container">
                <section className='grid grid-1'>
                    <div className='clip-image circle'>
                        <img src="./images/birdcouple.png" alt="Logo" className='clip-img' />
                    </div>
                    <div className='clip-image ellipse'>
                        <img src="./images/birdcouple.png" alt="Logo" className='clip-img' />
                    </div>
                    <div className='clip-image inset'>
                        <img src="./images/birdcouple.png" alt="Logo" className='clip-img' />
                    </div>
                    <div className='clip-image polygon'>
                        {/* <img src="./images/birdcouple.png" alt="Logo" className='clip-img' /> */}
                    </div>
                    <div className='clip-image path'>
                        <img src="./images/birdcouple.png" alt="Logo" className='clip-img' />
                    </div>

                    <div className='clip-image path2'>
                        <img src="./images/birdcouple.png" alt="Logo" className='clip-img' />
                    </div>
                </section>
            </div>
        </>
    )
}
export default clipPath