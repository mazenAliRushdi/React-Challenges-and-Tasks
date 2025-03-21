import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {

  const posts = [
    {id: 1, postName: "أكاديمية ترميز", postBody: 'أكاديمية مخصصة لتعليم البرمجة'},
    {id: 2, postName: "Hello", postBody: 'This is the second body'},
    {id: 3, postName: "the third post", postBody: 'This is the third body'}
  ]

  const postList = posts.map((post) => {
    return <Post key={post.id} postName={post.postName} postBody={post.postBody}></Post>
  })


  return (
    <div className="App">
      <Header />

      {/* POSTS CONTAINER */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* == POSTS CONTAINER == */}
          <div style={{ width: "70%" }}>
            {postList}
          </div>

          <div style={{ width: "30%", marginTop: "25px" }}>
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
