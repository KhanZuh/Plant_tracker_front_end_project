import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Navbar } from "react-bootstrap"
import Home from "./Components/Home"

function App() {

  return (
    <Router>
    <div className="app">
      {/*  <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* // <Route path="/users" element={<UsersPage />} /> */}
        {/* // <Route path="/plants" element={<PlantsPage/>} /> */}
        {/* add more routes if needed */}
      </Routes>    
    </div>
    </Router>
  )
}

export default App
