import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import { postsContext } from "./contexts/PostsContext";

export default function PostDetails() {
    let {postId} = useParams();
    let posts = useContext(postsContext);

    let targetPost = posts.find((post) => {
        return post.id == postId;
    });

    if (targetPost) {
        return (
            <>
                <h1>{targetPost.title}</h1>
                <hr />
                <p>{targetPost.body}</p>
                <Link to='/home'>
                    <button>Go To Home Page</button>
                </Link>
            </>
        )
    } else {
        return (
            <>
                <p>404</p>
            </>
        )
    }
}