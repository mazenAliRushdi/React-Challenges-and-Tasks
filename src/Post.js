import './Post.css';
function Post () {
    let hr = {
        marginBlock: '10px'
    }
    return (
        <div className={"post"}>
            <h3>This Is The Post Thitle</h3>
            <hr style={hr}/>
            <h6>This Is The Post Body</h6>
        </div>
    )
}

export default Post