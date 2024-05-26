//import React from "react"
import "./React.css"
function Main(){
   let h1styles={
      backgroundColor:"black",
      color:"rgb(255,255,255)",
      height:"100px",
      width:"30rem",
      border:"5px solid black",
      borderRadius:"10px"
   }
return (
   <div>
   <h1 style={h1styles}>wellcome to react</h1>
   <h1 className="react">do hard work</h1>
   </div>
)
}
export default Main;