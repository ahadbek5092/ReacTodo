import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
function PersonForm(props) {
  const [upname, setupname] = useState(props.values.name);
  const [uplastname, setuplastname] = useState(props.values.lastname);
  const [upage, setupage] = useState(props.values.age);
  const [newperson, setnewperson] = useState(props.values);
  const [upid, setupid] = useState();

  const url = "http://127.0.0.1:8000/api/person/";
  useEffect(() => {
    setupname(props.values.name);
    setuplastname(props.values.lastname);
    setupage(props.values.age);
    setupid(props.values.id);
    setnewperson(props.values);
  }, [props.values]);

  function handleUpdate() {
    axios({
      method: "put",
      url: `${url}${upid}/`,
      data: {
        name: upname,
        lastname: uplastname,
        age: upage,
      },
    }).then((resp) => setnewperson(resp.data));
  }
  return (
    <>
      {/* <h3>{props.values.name}</h3>
      <h3>{upid}</h3> */}
      {props.values.id ? (
        <form>
          <input
            type="text"
            value={upname}
            onChange={(e) => setupname(e.target.value)}
            // onChange={formik.handleChange}
          />
          <input
            type="text"
            value={uplastname}
            onChange={(e) => setuplastname(e.target.value)}
            // onChange={formik.handleChange}
          />
          <input
            type="text"
            value={upage}
            onChange={(e) => setupage(e.target.value)}
            // onChange={formik.handleChange}
          />
          <button type="button" onClick={handleUpdate}>
            update
          </button>
        </form>
      ) : null}
    </>
  );
}

export default PersonForm;
