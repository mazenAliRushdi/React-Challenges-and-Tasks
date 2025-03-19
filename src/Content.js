import Posts from "./Posts"
import Nav from "./nav"
import "./content.css"
function Content () {
    return (
        <div className={"content"}>
            <Posts />
            <Nav />
        </div>
    )
}

export default Content