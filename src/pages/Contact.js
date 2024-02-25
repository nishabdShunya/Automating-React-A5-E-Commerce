import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const nameChangeHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, name: event.target.value };
    });
  };

  const emailChangeHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, email: event.target.value };
    });
  };

  const phoneChangeHandler = (event) => {
    setUser((prevUser) => {
      return { ...prevUser, phone: event.target.value };
    });
  };

  const addUserHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://react-http-3e2e9-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }

    setUser({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="w-50 my-5 mx-auto">
      <p className="text-center">
        If you have any query, please fill this form. Our team shall contact you
        within an hour.
      </p>
      <Form onSubmit={addUserHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={user.name}
            onChange={nameChangeHandler}
          />
          <Form.Text className="text-muted">
            Provide name as recorded in your PAN card.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={emailChangeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={user.phone}
            onChange={phoneChangeHandler}
          />
          <Form.Text className="text-muted">
            Make sure that number given is working.
          </Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
