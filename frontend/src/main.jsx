import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} /> 
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* <Route path="/profile" element={<Profile />} /> */}
      {/* <Route path="/profile/:id" element={<Profile />} /> */}
      {/* <Route path="/profile/:id/edit" element={<EditProfile />} /> */}
      {/* <Route path="/profile/:id/delete" element={<DeleteProfile />} /> */}
      {/* <Route path="/profile/:id/follow" element={<FollowProfile />} /> */}
      {/* <Route path="/profile/:id/unfollow" element={<UnfollowProfile />} /> */}
      {/* <Route path="/profile/:id/posts" element={<ProfilePosts />} /> */}
      {/* <Route path="/profile/:id/posts/:id" element={<ProfilePosts />} /> */}
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
