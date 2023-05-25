import MainLayout from "../layouts/MainLayout"
import BlogPostTwo from "../components/blog-single/Blog-post-two"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BlogPageTwo = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <BlogPostTwo/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default BlogPageTwo