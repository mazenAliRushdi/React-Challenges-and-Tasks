import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import SideMenu from "./SideMenu";

function App() {
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
            <Post
              postName="أكاديمية ترميز"
              postBody="أكاديمية مخصصة لتعليم البرمجة"
            />

            <Post postName="Hello" postBody="This is the second body" />

            <Post postName="the third post" postBody="This is the third body" />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
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