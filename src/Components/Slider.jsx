import '../assets/css/slider.css'

function Slider() {
    return (
        <>
            <div className='banner'>
                <div className="slider" style={{'--quantity':10}}>
                    <div className="item" style={{'--position':1}}><img src="./images/birdgirl.png" alt="Logo" /></div>
                    <div className="item" style={{'--position':2}}><img src="./images/wal55.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':3}}><img src="./images/wal98.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':4}}><img src="./images/wal876.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':5}}><img src="./images/wal23.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':6}}><img src="./images/wal22.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':7}}><img src="./images/wal1.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':8}}><img src="./images/birdcouple.png" alt="Logo" /></div>
                    <div className="item" style={{'--position':9}}><img src="./images/wal22.jpg" alt="Logo" /></div>
                    <div className="item" style={{'--position':10}}><img src="./images/wal98.jpg" alt="Logo" /></div>
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

export default Slider