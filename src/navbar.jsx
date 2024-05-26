import React from "react"
import"./navbar.css"
class Navbar extends React.Component
{
    render()
    {
        return(
            <div>
                <nav className="nav">
                    <img  src="Image/tree.jfif" alt="img not found"className="img1"></img>
                <a href="#">About us</a>
                <a href="#">Contact us</a>
                <a href="#">Our Service</a>
                <a href="#">Our products</a>
                <button className="btn">Website</button>
            </nav>
            <aside className="side">
                <img src="Image/children.jfif" alt="img not found"></img>
                <a href="#">School Name </a>
                <a href="#">Place </a>
                <a href="#">Course </a>
            </aside>
            <section className="sec">
                
            </section>
            <footer className="foot">
        <h3>CopyRight:2024&copy;</h3>
        <small>all right reversed by @myschoolapp
            {/* <a href="http://www.myschool.com">myschool
            </a> */}
        </small>
    </footer>
            </div>
        )
    }
}
export default Navbar
