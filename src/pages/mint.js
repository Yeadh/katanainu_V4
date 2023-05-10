import MainLayout from "../layouts/MainLayout"
import Mint from "../components/Mint"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const MintPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <Mint/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default MintPage