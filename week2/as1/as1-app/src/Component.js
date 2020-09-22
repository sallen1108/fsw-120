import React from "react"

function Component(props) {
    console.log(props)
    return (
        <div className="components" style={{backgroundColor: props.components.backgroundColor, textAlign: "center", padding: "10px"}}>
            <h1 >{props.components.title}</h1>
            <h3>{props.components.subtitle}</h3>
            <p>{props.components.info}</p>
        </div>
    )
}

export default Component