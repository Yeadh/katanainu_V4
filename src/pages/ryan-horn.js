import MainLayout from "../layouts/MainLayout"
import RyanHorn from "../components/blog-single/Ryan-horn"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const RyanHornSingle = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <RyanHorn/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default RyanHornSingle