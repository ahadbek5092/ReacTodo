import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Form, Button, Col, Table } from "react-bootstrap";

import PersonForm from "./PersonForm";
function Post(props) {
  const [values, setvalues] = useState([]);
  const [persons, setpersons] = useState([]);
  const [update, setupdate] = useState({});

  const url = "http://127.0.0.1:8000/api/person/";
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      age: "",
    },
    onSubmit: (values) => {
      axios.post(`${url}`, values).then((resp) => setvalues(resp.data));
      axios.get(`${url}`).then((resp) => setpersons(resp.data));
    },
  });
  function handleDelete(id) {
    axios.delete(`${url}${id}`).then((resp) => {
      const del = persons.filter((person) => id !== person.id);
      setpersons(del);
    });
  }

  useEffect(() => {
    axios.get(`${url}`).then((resp) => setpersons(resp.data));
  }, []);

  function handleUpdate(id) {
    axios.get(`${url}${id}`).then((resp) => setupdate(resp.data));
  }

  return (
    <>
      <PersonForm values={update} />
      {/* <PersonForm
        value={update.name}
        id="name"
        name="name"
        onChange={handleChange}
      />
      <PersonForm
        value={update.lastname}
        id="lastname"
        name="lastname"
        onChange={handleChange}
      />
      <PersonForm
        value={update.age}
        id="age"
        name="age"
        onChange={handleChange}
      /> */}

      <Form onSubmit={formik.handleSubmit}>
        <Form.Row>
          {/* <Col>
            <Form.Control
              type="text"
              placeholder="id"
              id="id"
              name="id"
              value={formik.values.id}
              onChange={formik.handleChange}
            />
          </Col> */}
          <Col>
            <Form.Control
              type="text"
              placeholder="name"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="lastname"
              id="lastname"
              name="lastname"
              value={formik.values.lastname}
              onChange={formik.handleChange}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="age"
              id="age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
            />
          </Col>
          <Col>
            <Button type="submit">Add person</Button>
          </Col>
        </Form.Row>
      </Form>
      <hr />
      <Table bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>lastname</th>
            <th>age</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>

        {persons.map((item) => (
          <tbody key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.lastname}</td>
              <td>{item.age}</td>
              <td>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </Button>
              </td>
              <td>
                <Button variant="primary" onClick={() => handleUpdate(item.id)}>
                  Update
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <h1>HELLO WORLDSSDF</h1>
    </>
  );
}

export default Post;
