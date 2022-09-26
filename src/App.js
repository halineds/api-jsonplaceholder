import './App.css';
//components
import Navbar from './components/Navbar';
import AllPosts from './components/AllPosts';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';
import PostDetail from './components/PostDetail';
import Comments from './components/Comments';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

  function App () {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
