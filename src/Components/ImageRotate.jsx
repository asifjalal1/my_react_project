import '../assets/css/image_rotate.css'

function ImageRotate() {
    return (
        <>
            <div className='banner'>
                <div className="slider" style={{'--quantity':10}}>
                    <div className="item" style={{'--position':1}}><img src="./images/logo13.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':2}}><img src="./images/logo1.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':3}}><img src="./images/logo2.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':4}}><img src="./images/logo3.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':5}}><img src="./images/logo4.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':6}}><img src="./images/logo5.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':7}}><img src="./images/logo6.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':8}}><img src="./images/logo7.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':9}}><img src="./images/logo8.jpeg" alt="Logo" /></div>
                    <div className="item" style={{'--position':10}}><img src="./images/logo9.jpeg" alt="Logo" /></div>
                </div>
                <div className="content">
                    <h1 data-content="CSS ONLY">CSS ONLY</h1>
                    <div className="author">
                        <h2>ASIF DEV</h2>
                        <p><b>Web Design</b></p>
                        <p>Creating this text to test the task</p>
                    </div>
                    <div className="model"></div>
                </div>
            </div>
        </>
    )
}

export default ImageRotate