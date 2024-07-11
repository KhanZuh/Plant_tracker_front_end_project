import React from "react"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import UserProfile from "./Components/UserProfile"
import Navigation from "./Components/Navigation"
import Footer from "./Components/Footer"
import { useState, useEffect } from "react"
import UsersList from "./Components/UsersList"
import UserForm from "./Components/UserForm"
import PlantList from "./Components/PlantList"
import PlantProfile from "./Components/PlantProfile"
import UserDutyForm from "./Components/UserDutyForm"
import PlantForm from "./Components/PlantForm"
import CountryList from "./Components/CountryList"
import CountryForm from "./Components/CountryForm"

function App() {

  const [users, setUsers] = useState([])
  const [plants, setPlants] = useState([])
  const [duties, setDuties] = useState([])
  const [countries, setCountries] = useState([])
  const [message, setMessage] = useState([])
  const [loading, setLoading] = useState(true);
  const [plantCountdown, setPlantCountDown] = useState({});
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [events, setEvents] = useState([]);

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

  const fetchInstructions = async (id) => {
    const response = await fetch(`http://localhost:8080/plants/message/${id}`);
    const data = await response.json();
    return data;
  }

  const showInformation = async (id) => {
    const message = await fetchInstructions(id);
    setMessage(message);
  }

  const fetchData = async () => {
    try {
      await Promise.all([
        fetchUsers(),
        fetchPlants(),
        fetchDuties(),
        fetchCountries(),
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

  const postUser = async (newUser) => {
    const response = await fetch("http://localhost:8080/people", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newUser)
    });
    const savedUser = await response.json();
    setUsers([...users, savedUser]);
  }

  const postDuty = async (newDuty) => {
    const response = await fetch("http://localhost:8080/duties", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newDuty)
    });
    const savedDuty = await response.json();
    setDuties([...duties, savedDuty]);
  }

  const deleteDuty = async (id) => {
    const response = await fetch(`http://localhost:8080/duties/${id}`, {
      method: "DELETE"
    });
    if(response.ok){
      await fetchDuties();
    } else {
      console.error("Failed to delete duty")
    }
  }

  const getPlant = async (id) => {
    const response = await fetch(`http://localhost:8080/plants/${id}`);
    const data = await response.json();
    return data;
  };

  const getPlantCountdown = async (id) => {
    const response = await fetch(`http://localhost:8080/plants/countdown/${id}`);
    const data = await response.json();
    if(data.countdown === "") {
      data.countdown = 0;
    }
    setPlantCountDown(data);
  }

  const waterPlant = async (id) => {
    const response = await fetch(`http://localhost:8080/plants/${id}/water-plant`, {
      method: 'PATCH'
    });
    if (response.ok) {
      // Refresh the plant data
      await fetchPlants();
    } else {
      console.error('Failed to water plant');
    }
  }

  const postPlant = async (newPlant) => {
    const response = await fetch("http://localhost:8080/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newPlant)
    });
    const savedPlant = await response.json();
    
    // Immediately update the state with the new plant
    setPlants(prevPlants => [...prevPlants, savedPlant]);
    
    // Trigger a re-fetch to ensure consistency with the server
    fetchPlants();
    
    return savedPlant;
  }

  const postCountry = async (newCountry) => {
    const response = await fetch("http://localhost:8080/countries", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newCountry)
    });
    const savedCountry = await response.json();
    
    // Immediately update the state with the new plant
    setCountries(prevCountries => [...prevCountries, savedCountry]);
    
    // Trigger a re-fetch to ensure consistency with the server
    fetchCountries();
    
    return savedCountry;
  }

  const convertDate = () => {

    const countDownPromises = filteredPlants.map((plant) => {
      return fetch(`http://localhost:8080/plants/countdown/${parseInt(plant.id)}`)
      .then(response => response.json());
    })

    Promise.all(countDownPromises)
    .then((countdowns) => {
      const newEvents = filteredPlants.map( (plant) => {

        let plantC;

        countdowns.forEach(countdown => {
          if(countdown.plantId === plant.id){
            plantC = countdown.countdown;
          }
        })
  
        console.log("Count down " + plantC)
    
        let date = plant.lastWateredDates[plant.lastWateredDates.length - 1]
    
        date = date.split("/").reverse().join("/");
        date = date.replaceAll("/", "-");
    
        console.log("INITIAL DATE: " + date);
    
        let nextWaterDate = new Date(date);
    
        nextWaterDate.setDate(nextWaterDate.getDate() + Number(plantC));
        
        nextWaterDate = nextWaterDate.toISOString().split('T')[0];
    
        console.log("NEXT DATE: " + nextWaterDate)
  
        return {
          title: plant.name,
          date: nextWaterDate
        }
      })
  
      setEvents(newEvents);
    })

  }

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //       if (filteredPlants.length > 0) {
  //           const newEvents = await Promise.all(filteredPlants.map(async (plant) => {
  //               const nextWaterDate = await convertDate(plant);
  //               if (nextWaterDate) {
  //                   return {
  //                       title: plant.name,
  //                       date: nextWaterDate
  //                   };
  //               }
  //               return null;
  //           }));
  //           setEvents(newEvents.filter(event => event !== null));
  //       }
  //   };

  //   fetchEvents();
  // }, [filteredPlants]);


  useEffect(() => {
    setFilteredPlants(plants.filter(plant => plant.lastWateredDates.length != 0));
  }, [plants])

  useEffect(() => {
    convertDate();
  }, [filteredPlants])

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app d-flex flex-column min-vh-100">
        <Navigation />
        <main className="flex-shrink-0">
        <Routes>
        <Route path="/" element={<Home events = {events}/>} />
        <Route path="/users" element={<UsersList users={users} />} />
        <Route path="/users/:id" element={<UserProfile users={users} duties={duties} message={message} showInformation={showInformation} deleteDuty={deleteDuty}/>} />
        <Route path="/plants" element={<PlantList users={users} plants={plants} countries={countries}/>} />
        <Route path="/plants/:id" element={<PlantProfile users={users} plants={plants} countries={countries} duties={duties} waterPlant={waterPlant} getPlant={getPlant} getPlantCountdown = {getPlantCountdown} plantCountdown = {plantCountdown}/>} />
        <Route path="/users/create" element={<UserForm postUser={postUser}/>} />
        <Route path="/plants/create" element={<PlantForm postPlant={postPlant} countries={countries}/>} />
        <Route path="/users/:id/add-duty" element={<UserDutyForm users={users} plants={plants} duties={duties} postDuty={postDuty} fetchPlants={fetchPlants}/> } />
        <Route path="/countries" element={<CountryList countries={countries}/> } />
        <Route path="/countries/create" element={<CountryForm postCountry={postCountry}/> } />
        {/* add more routes if needed */}
        </Routes> 
        </main>
        <Footer showLanguageSelector={true} />      
        </div>
    </Router>
  );
}


export default App;
