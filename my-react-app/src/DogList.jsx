import React, { useState, useEffect } from "react";

const DogList = ({ dogs, refreshDogs }) => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    setLikes(Array(dogs.length).fill(0));
  }, [dogs]);

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  return (
    <div className="dog-list">
      {dogs.map((dog, index) => (
        <div key={index} className="dog-item">
          <img src={dog} alt={`Dog ${index + 1}`} />
          <div className="dog-actions">
            <button
              className={`like-button ${likes[index] > 0 ? "liked" : ""}`}
              onClick={() => handleLike(index)}
            >
              Like {likes[index]}
            </button>
          </div>
        </div>
      ))}
      <div className="refresh-container">
        <button className="refresh-button" onClick={refreshDogs}>
          Refresh Images
        </button>
      </div>
    </div>
  );
};

export default DogList;
