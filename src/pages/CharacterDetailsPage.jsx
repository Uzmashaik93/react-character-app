import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CharacterDetails() {
  const [character, setCharacter] = useState(null);

  const { characterId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
      .then((response) => {
        setCharacter(response.data);
      })
      .catch((e) => console.log("Error", e));
  }, []);

  if (character === null) {
    return "Loading....";
  }

  return (
    <div>
      <h2>Details page of the id .... {characterId}</h2>
      <p>{character.name}</p>
      <p>{character.occupation}</p>
      <p>{character.debt ? "Yes" : "No"}</p>

      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
export default CharacterDetails;
