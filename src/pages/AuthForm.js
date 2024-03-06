import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AuthContext from "../store/auth-context";

function AuthForm() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpKGbcXRhUz7tVp_2ApTJ8kGraDg_omE4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpKGbcXRhUz7tVp_2ApTJ8kGraDg_omE4";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const data = await response.json();
      authCtx.login(data.idToken);
      navigate("/products");
    } catch (error) {
      alert(error.message);
    }
  };

  const changeAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="my-5 mx-auto w-50">
      <h1 className="my-4 text-center">{isLogin ? "Login" : "Sign Up"}</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailInputRef}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-flex flex-column">
          <Button
            variant="warning"
            type="submit"
            className="align-self-center mb-3"
          >
            {isLogin ? "Login" : "Sign Up"}
          </Button>
          <Button
            variant="outline-dark"
            type="button"
            onClick={changeAuthModeHandler}
          >
            {isLogin
              ? "Create a new account"
              : "Login with a registered account"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;
