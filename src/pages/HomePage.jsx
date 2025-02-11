import { useEffect, useState } from "react";
import axios from "axios";

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
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
