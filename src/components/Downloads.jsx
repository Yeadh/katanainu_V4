import React from 'react'
// import ReactPlayer from 'react-player'

const Downloads = () =>{
    return (
        <>
          {/* download-area */}
          <section className="download-area">
          <div className="container">
            <div className="row align-items-end justify-content-center">

              <div className="col-xl-5 col-lg-9">
                <div className="download-content">
                  <h4 className="title">BETA VERSION IS COMING SOON!</h4>
                  <h6 className="desc">Our Beta will be 3 vs 3 player version with more game modes following soon.</h6>
                  <p>You can test and play the demo 1vs1 now.</p>


                  <h4 className="title">For this Demo, you need a key.</h4>
                  {/* <h4 className="title">Please request a KEY first</h4> */}
                  <p>Our server are online everyday from 8-10 pm CET time.</p>
                  <h2 className="download-now">Download Now &amp; <span><img src="assets/img/images/text.png" alt="" /></span></h2>
                  <div className="download-btn-wrap">
                    <a target="_blank" rel="noreferrer" href="https://play.katanainu.com/">
                      <img src="assets/img/images/download_btn.png" alt="" />
                      <span>Please request a KEY first</span>
                    </a>

                    <a href="https://play.katanainu.com/" target="_blank" rel="noreferrer" class="btn">Request a key</a>
                    {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKIiYSpqNiBotOqkYZMUKqKnizt2_Xm1cLFjkyBH_CcpX3hg/viewform" target="_blank" rel="noreferrer" class="btn">Request a key</a> */}

                  </div>
                  <div className="system-req">
                    <h6 className="req-title">System Requirements</h6>
                    {/* <p>Standard computer with a sustainable graphic.</p> */}
                    <ul>
                      <li><span>CPU: </span>Intel i3</li>
                      <li><span>RAM: </span>4 GB</li>
                      <li><span>GPU: </span>NVIDIA GTX 970</li>
                      <li><span>DX: </span>Version 11</li>
                      <li><span>OS: </span>Windows 10 64-bit</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-9">
                <div className="download-img">
                  <img className="paroller" data-paroller-factor=".03" data-paroller-type="foreground" data-paroller-direction="horizontal" src="assets/img/images/download_img.png" alt="img" />
                  <div className="about-video about_video">
                    <iframe src={"https://www.youtube.com/embed/HqUcaLl1EFw?autoplay=1&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin=" + window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                  </div>
                  {/* <div className="player-wrapper">

                    <ReactPlayer
                      className='react-player'
                      url='https://www.youtube.com/watch?v=9c7pDf-WFAk&t=4s'
                      playing='true'
                      width='640'
                      height='360'
                      loop='true'
                      controls='true'
                      // muted='true'
                    />
                  </div> */}
                </div>

              </div>

            </div>
          </div>
          </section>
          {/* download-area-end */}
        </>
    )
}

export default Downloads