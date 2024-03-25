
import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/signin'
import { Blog } from './pages/blog'
import { Blogs } from './pages/blogs'
import { Publish } from './pages/Publish'
import { Landing } from './pages/Landing'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/blog/:id" element={<Blog/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/publish" element={<Publish/>}></Route>
          
        </Routes>
        
      </BrowserRouter>
     
    </div>
  )
}

export default App
