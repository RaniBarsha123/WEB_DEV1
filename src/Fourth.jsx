import React from "react";

function Fourth()
    {
        let fruits=["apple","banana","chiku","mango","grapes"]
        let fruitsDisplay=[]
        for(let fruit of fruits){
            fruitsDisplay.push(<li>{fruit}</li>)
        }
        return(
            <>
            {fruitsDisplay}
            <div style={{display:"flex",gap:"10px",background:"yellow"}}>
        {fruits.map(ele=>{
                return <h1>{ele}</h1>
            })
        }
            </div>
            </>
        )
    }
export default Fourth