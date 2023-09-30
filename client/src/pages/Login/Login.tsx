import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import { GoogleLogin } from '@react-oauth/google';
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

const responseMessage = (response: any) => {
    console.log(response);
};
const errorMessage = (error: any) => {
    console.log(error);
};

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
    <div className="login-page">
        <h1>Login</h1>
        <div className="signup-page">
        <input placeholder="username">
        
        </input>

        <br/>
        <br/>

        <input placeholder="pass">
        
        </input>

        <br/>
        <br/>

      </div>
        <button onClick={() => attemptLogin()}>
          Login
        </button>

        <br/>
        <br/>

        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;
