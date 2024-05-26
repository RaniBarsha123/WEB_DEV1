import React from "react";
const Third=()=>{
    let x=10;
    return(
        <React.Fragment>
            {
            x > 5?<h1>{x} is greater</h1>:<h1>{x} is smaller</h1>
}
{
    x > 10 ||<h1>{x}is the greater number</h1>
}
        </React.Fragment>
    )
}
export default Third