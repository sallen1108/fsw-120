import React from "react"

function Vacation(props) {
    return (
        <div style={{textAlign: "center", flexDirection: "row", flexWrap: "wrap",}}>
            <h2 style={{color: "black", fontWeight: "900"}}>Place: {props.place}</h2>
            <h3 style={{color: "black", fontWeight: "450"}}>Price: {props.price}</h3>
            <h3 style={{color: "black", fontWeight: "450",}}>Time To Go: <p style={{color: "blue", padding: "0", }}>{props.timeToGo}</p></h3>
            <hr/>
        </div>
    )
}

export default Vacation