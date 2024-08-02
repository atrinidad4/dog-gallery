import React, { useState, useEffect } from "react";
import DogList from "./DogList";
import "./App.css";

function App() {
  const [dogs, setDogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDogs = () => {
    fetch("https://dog.ceo/api/breeds/image/random/12")
      .then((response) => response.json())
      .then((data) => setDogs(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Dog Gallery</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by breed..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <DogList dogs={filteredDogs} refreshDogs={fetchDogs} />
    </div>
  );
}

export default App;
