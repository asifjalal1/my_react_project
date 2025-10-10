import styled from "./assets/css/motion.module.css";
function Motion() {
  return (
    <>
      <div id={styled.feature}>
        <div id={styled.content}>
          <header>
            <h2>Lightening-Fast Data Transfer</h2>
            <p className={`${styled.large} ${styled.muted}`}>Experence the power of Lightening-fast data transfers, a standout feature of this revolutionary encription solution.</p>
          </header>
          <div id={styled.grid}>
            <div>
              <img src="./images/logo03.jpeg" width={40} alt="copy" />
              <h3>1. Lightening-Fast Data Transfer</h3>
              <p className={`${styled.large} ${styled.muted}`}>Experence the power of Lightening-fast data transfers, a standout feature of this revolutionary encription solution.</p>
            </div>
            <div>
              <img src="./images/logo01.jpeg" width={30} alt="copy" />
              <h3>2. Lightening-Fast Data Transfer</h3>
              <p className={styled.large}>Experence the power of Lightening-fast data transfers, a standout feature of this revolutionary encription solution.</p>
            </div>
          </div>
        </div>
        <div id={styled.media}>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jLlDGnqKhv8?si=Nol8WgsbShdV4_Wq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
           <video src="./videos/chips.mp4" width={500} height={500} controls muted poster={`./images/logo02.jpeg`}></video>
        </div>
      </div>
    </>
  )
}

export default Motion;