import { useState } from "react";
import './Login.css';

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const emailHandler = (event) => {
    setLoginData({ ...loginData, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setLoginData({ ...loginData, password: event.target.value });
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    console.log(loginData)
    props.showDashboardpage(true)
    console.log("dashboard")
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <form onSubmit={LoginHandler} className="form">
        <h1>Login</h1>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter Email"
            onChange={emailHandler}
            value={loginData.email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter Password"
            onChange={passwordHandler}
            value={loginData.password}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
