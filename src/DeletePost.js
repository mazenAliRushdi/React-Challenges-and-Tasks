import { Link } from "react-router-dom"
export default function DeletePost () {
    return (
        <>
            <h1>This Is Delete Post</h1>
            <Link to={'/'}>
                <button>Go To Home</button>
            </Link>
        </>
    )
}