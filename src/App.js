import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import PostsList from './PostsList';
import PostDetails from './PostDetails';
import { postsContext } from './contexts/PostsContext';
import NotFound from './NotFound';
import NewPost from './newPost';
import DeletePost from './DeletePost';
import PostLayout from './PostLayout';

let posts = [
  {
      id: 1,
      title: "Post1",
      body: "al;dfkldfkl"
  },
  {
      id: 2,
      title: "Post2",
      body: "al;dfkldfkl"
  },
  {
      id: 3,
      title: "Post3",
      body: "al;dfkldfkl"
  }
]

export default function App() {
  return (
    // Routes
    <postsContext.Provider value={posts}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />


        <Route path='/posts' element={<PostLayout />}>
          <Route index element={<PostsList />} />
          <Route path='post/:postId' element={<PostDetails />}/>

          <Route path='post'>
            <Route path='newPost' element={<NewPost />} />
            <Route path='deletePost' element={<DeletePost />}/>
          </Route>
        </Route>


        <Route path='*' element={<NotFound />} />
      </Routes>
    </postsContext.Provider>
  );
}