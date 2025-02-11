import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-crud-api.herokuapp.com/characters")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((e) => {
        console.log("Error", e);
      });
  }, []);

  if (characters === null) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>Number of Characters in the API : {characters.length} </h3>
      {characters.map((characterObj, i) => {
        return (
          <div key={i} className="box">
            <h4>Name : {characterObj.name}</h4>
            <p>Occupation : {characterObj.occupation}</p>
            <Link to={`/characters/${characterObj.id}`}>
              <button>More details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
