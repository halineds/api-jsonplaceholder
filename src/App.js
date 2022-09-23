import './App.css';
//components
import Navbar from './components/Navbar';
import CodeforInterview from './components/CodeforInterview';
import AllPosts from './components/AllPosts';
import NewPost from './components/NewPost';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

  function App () {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<CodeforInterview />}  />
        <Route path="/posts" element={<AllPosts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/new" element={<NewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
