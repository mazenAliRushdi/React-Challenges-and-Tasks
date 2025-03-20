import logo from "./logo.svg";
import "./App.css";
import MyFirstComponent from "./MyFirstComponent";
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
            <Post title="20" name='أكاديمية ترميز' content='أكاديمية مخصصة لتعليم البرمجة بمختلف لغتها وتقنياتها'/>
            <Post title='hello world' content='this is the hello world article'/>
            <Post title='Post 3' content='this is the body of post 3'/>
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
