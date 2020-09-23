import React from "react"

function BlogPost(props) {
    return (
        <div style={{marginLeft: "50px"}}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>posted by {props.author} on {props.date}</p>
            <hr/>
        </div>
    )
}

export default BlogPost