import MainLayout from "../layouts/MainLayout"
import EnaBarbic from "../components/blog-single/Ena-barbic"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"


const EnaBarbicSingle = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <EnaBarbic/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default EnaBarbicSingle