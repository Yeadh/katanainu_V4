import MainLayout from "../layouts/MainLayout"
import Blog from "../components/Blog"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BlogPage = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <Blog/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default BlogPage