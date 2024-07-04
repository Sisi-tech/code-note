import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditPost from './pages/Edit';
import DeletePost from './pages/Delete';
import ReadPost from './pages/Read';
import CreatePost from './pages/Create';


function App() {

  return (
    <Router className='w-full h-screen bg-black'>
      <Routes>
        <Route path="/read" element={<ReadPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/delete/:id" element={<DeletePost />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
