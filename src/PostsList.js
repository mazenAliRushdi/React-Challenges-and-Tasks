import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "./contexts/PostsContext";


export default function PostsList() {
    let posts = useContext(postsContext);
    let post = posts.map((postDetails) => {
        return (
            <Link to={`post/${postDetails.id}`}>
                <h1>{postDetails.title}</h1>
            </Link>
        )
    })

    return (
        <>
            {post}
        </>
    )
}