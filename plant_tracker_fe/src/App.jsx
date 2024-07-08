import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import { useState, useEffect } from "react"
import UsersList from "./Components/UsersList"


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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UsersList users={users} />} />
        <Route path="/users/:id" element={<UserProfile users={users} duties={duties} />} />
        {/* <Route path="/plants" element={<PlantsList users={users} plants={plants} />} /> */}
        {/* add more routes if needed */}
      </Routes>    
    </div>
    </Router>
  )
}

export default App
