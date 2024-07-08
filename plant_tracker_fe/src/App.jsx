import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Navbar } from "react-bootstrap"
import Home from "./Components/Home"
import { useState, useEffect } from "react"


function App() {

  const [users, setUsers] = useState([])
  const [plants, setPlants] = useState([])
  const [duties, setDuties] = useState([])
  const [countries, setCountries] = useState([])

  const fetchUsers = async() => {
    const response = await fetch('http://localhost:8080/people');
    const data = await response.json();
    setUsers(data);
  }

  const fetchPlants = async() => {
    const response = await fetch('http://localhost:8080/plants');
    const data = await response.json();
    setPlants(data);
  }

  const fetchDuties = async() => {
    const response = await fetch('http://localhost:8080/duties');
    const data = await response.json();
    setDuties(data);
  }

  const fetchCountries = async() => {
    const response = await fetch('http://localhost:8080/countries');
    const data = await response.json();
    setCountries(data);
  }

  useEffect(() => {
    fetchUsers(),
    fetchPlants(),
    fetchDuties(),
    fetchCountries()}, [])



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
