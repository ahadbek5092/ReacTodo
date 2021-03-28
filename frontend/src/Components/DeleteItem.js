import axios from "axios";
import React, { useEffect, useState } from "react";

function DeleteItem() {
  const [persons, setpersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/person/")
      .then((resp) => setpersons(resp.data));
  }, []);
  return (
    <div>
      <ol>
        {persons.map((item) => (
          <li>{item.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default DeleteItem;
