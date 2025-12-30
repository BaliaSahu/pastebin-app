import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ViewPaste from './pages/ViewPaste'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/p/:id" element={<ViewPaste></ViewPaste>} ></Route>
    </Routes>
   </div>
  )
}

export default App
