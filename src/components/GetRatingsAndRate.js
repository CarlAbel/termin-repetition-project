import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const classID = 1;
  const [rating, setRating] = useState([]);
  const [userRating, setUserRating] = useState(0);

  useEffect(function () {
    (async function () {
      try {
        const response = await axios.get(
          "http://localhost:3030/ratings?classID=" + classID
        );

        const result = response.data.reduce(function (sum, item) {
          return sum + item.rating;
        }, 0);
        setRating(result / response.data.length);
      } catch (error) {}
    })();
  }, []);

  function handleRatingChange (event) {
    const ratingValue = parseInt(event.target.value);
    setUserRating(ratingValue);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        {[...Array(5)].map((_, index) => (
          <label
            key={index}
            style={{
              display: "block",
              width: "20px",
              height: "20px",
              backgroundColor:
                index + 1 <= Math.floor(rating) ? "pink" : "grey",
              border: "1px solid black", // Add a border to the label
            }}
          >
            <input
              type="radio"
              value={index + 1}
              name="rating"
              style={{ display: "none" }}
              onClick={handleRatingChange}
            />
          </label>
        ))}
      </div>
      <p>Rating: {rating}</p>
      {userRating > 0 && (
        <p>Tak for din rating {userRating}!</p>
      )}
    </div>
  );
}

export default App;