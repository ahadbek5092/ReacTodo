import axios from "axios";
import React, { useEffect, useState } from "react";

function GetId() {
  const [person, setperson] = useState({});
  const [id, setid] = useState();
  const [idButton, setidButton] = useState();
  //   const handleClick = () => {
  //     setidButton(id);
  //   };
  function handleClick() {
    setidButton(id);
  }
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/person/${idButton}`)
      .then((resp) => setperson(resp.data));
  }, [idButton]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setid(e.target.value)} />
      <button type="button" onClick={handleClick}>
        fetch person
      </button>

      <div>{person.name}</div>
    </div>
  );
}

export default GetId;
