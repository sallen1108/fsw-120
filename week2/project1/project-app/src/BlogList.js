import React from "react"

import blogData from "./blogData"
import BlogPost from "./BlogPost"

function BlogList() {
    const post = blogData.map(blog => <BlogPost key={blog.id} title={blog.title} subtitle={blog.subtitle} author={blog.author} date={blog.date} />)
    
    return (
        <div>
            {post}
        </div>
  )
}

export default BlogList