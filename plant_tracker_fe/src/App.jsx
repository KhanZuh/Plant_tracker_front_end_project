import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import UserProfile from "./Components/UserProfile"
import Navbar from "./Components/Navbar"
import { useState, useEffect } from "react"
import UsersList from "./Components/UsersList"
import UserForm from "./Components/UserForm"
import PlantList from "./Components/PlantList"
import PlantProfile from "./Components/PlantProfile"


function App() {

  const [users, setUsers] = useState([])
  const [plants, setPlants] = useState([])
  const [duties, setDuties] = useState([])
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true);


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

  const fetchData = async () => {
    try {
      await Promise.all([
        fetchUsers(),
        fetchPlants(),
        fetchDuties(),
        fetchCountries()
      ]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const postUser = async (newUser) => {
    const response = await fetch("http://localhost:8080/people", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser)
    });
    const savedUser = await response.json();
    setUsers([...users, savedUser]);
  }

  return (
    <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UsersList users={users} />} />
        <Route path="/users/:id" element={<UserProfile users={users} duties={duties}  />} />
        <Route path="/plants" element={<PlantList users={users} plants={plants} countries={countries} />} />
        <Route path="/plants/:id" element={<PlantProfile users={users} plants={plants} countries={countries} />} />
        <Route path="/users/create" element={<UserForm postUser = {postUser}/>} />
        {/* add more routes if needed */}
      </Routes>    
    </div>
    </Router>
  )
}

export default App;
