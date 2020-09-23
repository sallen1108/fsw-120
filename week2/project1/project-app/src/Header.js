import React from "react"

function Header() {
    return (
        <div style= {{height: "300px", backgroundColor: "silver", textAlign: "center", color: "white"}}>
            <div>
                <span style={{padding: "10px", fontWeight: "700px"}}>HOME</span>
                <span style={{padding: "10px", fontWeight: "700px"}}>ABOUT</span>
                <span style={{padding: "10px", fontWeight: "700px"}}>SAMPLE POST</span>
                <span style={{padding: "10px", fontWeight: "700px"}}>CONTACT</span>
            </div>
            <h1 style= {{paddingTop: "5px", fontWeight: "800px", fontSize: "100px"}}>Clean Blog</h1>
        </div>
    )
}

export default Header