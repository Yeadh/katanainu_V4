const About = () =>{
    return (
        <div className="team-area about-area">
            <div className="container custom-container-2">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="section-title text-center">
                            <h5 className="sub-title element paroller" data-paroller-factor="-.05" data-paroller-type="foreground" data-paroller-direction="horizontal">THE GAME</h5>
                            <h2 className="title paroller" data-paroller-factor=".05" data-paroller-type="foreground" data-paroller-direction="horizontal">WITH P2E ECOSYSTEM</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-100 about-section flex-wrap">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-content">
                            <span>KATANA INU NFT-GAMING</span>
                            <h3>BEST NFT PC GAME WITH P2E ECOSYSTEM</h3>
                            <p>Katana Inu promotes gaming innovation by efficiently merging two revolutionary technologies — gaming and blockchain. As an all-encompassing ecosystem for gamers and traders, powered by Defi and NFT, Katana Inu's objective is simple: to create a system where gamers can earn from their playtime. More than 1 billion PC gamers play traditional games for several hours every day without earning from their grind. We hope to change this by developing a unique Play-to-Earn battle royale PC game with NFT mechanics. This approach is the central concept behind Katana Inu! The game comes with rare NFT skins and high graphics to lure players from the blockchain and NFT space and a portion of the 1 billion players of traditional PC games. Katana Inu comes with its native cross-chain NFT marketplace, which is open to Katana Inu players, regular art dealers, and gamers from other NFT projects.</p>
                            <div className="action-buttons">
                                <div className="banner-btn-wrap justify-content-start mt-4">
                                    <a href="https://nft.katanainu.com/" target="_blank" rel="noreferrer" className="btn">nft pages</a>
                                    <a href="# " className="btn">buy token</a>
                                    <a href="https://staking.katanainu.com/" target="_blank" rel="noreferrer" className="btn">Staking Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="about-video about_video">
                            <iframe src={"https://www.youtube.com/embed/9c7pDf-WFAk?autoplay=1&iv_load_policy=0&loop=1&playsinline=1&controls=0&mute=1&origin="+window.location.origin} title="YouTube video player" frameBorder={0} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About