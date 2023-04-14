import MainLayout from "../layouts/MainLayout"
import GamePartners from "../components/GamePartners"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const PartnerPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <GamePartners/>
            </MainLayout>
            <Dots  color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default PartnerPage