import MainLayout from "../layouts/MainLayout"
import BlogPostThree from "../components/blog-single/Blog-post-three"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BlogPageThree = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <BlogPostThree/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default BlogPageThree