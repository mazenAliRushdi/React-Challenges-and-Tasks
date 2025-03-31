import { Link } from "react-router-dom"
export default function NewPost() {
    return (
        <>
            <h1>This Is New Post</h1>
            <Link to={'/'}>
                <button>Go To Home</button>
            </Link>
        </>
    )
}