import React, { useEffect, useState } from "react";
import axios from "axios";
function PersonList() {
  const [persons, setpersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/person/")
      .then((res) => setpersons(res.data));
  }, []);

  return (
    <div>
      <ol>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default PersonList;
