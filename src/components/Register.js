import { useState } from "react";
import "./Register.css";

const Register = (props) => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [emailValidator, setEmailValidator] = useState(false)
  const [passwordValidator, setPasswordValidator] = useState(false)


  const userNameHandler = (event) => {
    setRegisterData({ ...registerData, username: event.target.value });
  };
  const emailHandler = (event) => {
    setRegisterData({ ...registerData, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setRegisterData({ ...registerData, password: event.target.value });
  };



  const registerHandler = (event) => {
    event.preventDefault();
    if(registerData.email.trim().length !== 0 && registerData.password.trim().length !== 0){
        props.showLogin(true);
    }else {
        setEmailValidator(true)
        setPasswordValidator(true)
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {emailValidator && <h4>Please Enter Email</h4>}
      {passwordValidator && <h4>Please Enter Password</h4>}
      <form className="form" onSubmit={registerHandler}>
        <label>
          Username
          <input
            type="text"
            placeholder="Enter Username"
            onChange={userNameHandler}
            value={registerData.username}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter Email"
            onChange={emailHandler}
            value={registerData.email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter Password"
            onChange={passwordHandler}
            value={registerData.password}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
