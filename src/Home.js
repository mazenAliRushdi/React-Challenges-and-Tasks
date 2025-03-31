import { Link } from "react-router-dom"
export default function Home() {
    return (
        <>
            <h1>This Is Home Page</h1>
            <Link to={'/posts'}>
                <button>Posts</button>
            </Link>

            <Link to={'/posts/post/newPost'}>
                <button>New Post</button>
            </Link>

            <Link to={'/posts/post/deletePost'}>
                <button>Delete Post</button>
            </Link>
        </>
    )
}