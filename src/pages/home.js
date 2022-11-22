import ParallaxBg from "../components/parallax"
// import Banner from "../components/Banner"
import Brands from "../components/Brands"
import MainLayout from "../layouts/MainLayout"
import BackLayout from "../layouts/BackLayout"
import Gallery from "../components/Garallery"
import Downloads from "../components/Downloads"
import Actions from "../components/Actions"
import Characters from "../components/Characters"
import Coins from "../components/Coins"
import Ecosystem from "../components/Ecosystem"
import Roadmap from "../components/Roadmap"
// import Tokenomics from "../components/Tokenomics"
import Weapons from "../components/Weapons"
// import Ecosystem2 from "../components/Ecosystem2"
// import MainSlider from "../components/MainSlider"
import Partners from "../components/partners"
import PurchaseArea from "../components/PurchaseArea"
// import SimpleSlider from "../components/Pack"
import PackArea from "../components/Packarea"

import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"


const Home = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <ParallaxBg />
                {/* <Banner/> */}
                <BackLayout>
                    <Brands/>
                    <PackArea />
                    <Gallery/>
                    <Downloads/>
                    <Actions/>
                    <Characters/>
                    <Coins/>
                    <Ecosystem/>
                    <Roadmap/>
                    {/* <Tokenomics/> */}
                    <Weapons/>
                    {/* <Ecosystem2/> */}
                    <Partners/>
                    <PurchaseArea/>
                </BackLayout>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default Home