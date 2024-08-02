import React, { useState, useEffect } from 'react';
import './App.css'; 

const API_URL = 'https://dog.ceo/api/breeds/image/random/12';

function App() {
  const [dogs, setDogs] = useState([]);
  const [likes, setLikes] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchDogs();
  }, []);

  const fetchDogs = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setDogs(data.message);
 
    setLikes(data.message.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {}));
  };

  const handleLike = (index) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [index]: prevLikes[index] + 1
    }));
  };

  const handleRefresh = () => {
    fetchDogs();
  };

  const filteredDogs = dogs.filter(dog =>
    search === '' || dog.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="title">Dog Gallery</div>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by breed"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="refresh-button" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
      <div className="dog-list">
        {filteredDogs.map((dog, index) => (
          <div key={index} className="dog-item">
            <img src={dog} alt={`Dog ${index}`} />
            <div className="dog-actions">
              <button
                className={`like-button ${likes[index] > 0 ? 'liked' : ''}`}
                onClick={() => handleLike(index)}
              >
                Like {likes[index]}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
