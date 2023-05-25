import MainLayout from "../layouts/MainLayout"
import BlogPostFour from "../components/blog-single/Blog-post-four"
import { Dots } from "react-preloaders2"
import { useEffect, useState } from "react"

const BlogPageFour = () =>{
    const [isLoading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    },[])
    return (
        <>
            <MainLayout>
                <BlogPostFour/>
            </MainLayout>
            <Dots color="#f3a511" customLoading={isLoading}/>
        </>
    )
}

export default BlogPageFour