import {BrowserRouter as Router } from "react-router-dom"
import './App.css'
import { Navbar } from "react-bootstrap"

function App() {

  return (
    <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/users" elemnent={<UsersPage />} />
        <Route path="/plants" element={<PlantsPage/>} />
        {/* add more routes if needed */}
      </Routes>    
    </div>
    </Router>
  )
}

export default App
