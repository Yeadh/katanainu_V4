import MainLayout from "../layouts/MainLayout"
import BlogPostOne from "../components/blog-single/Play-to-earn"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BlogPageOne = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <BlogPostOne/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default BlogPageOne