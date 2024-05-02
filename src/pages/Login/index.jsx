import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { validateLogin } from "../../functions";

function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    if (validateLogin(usernameRef, passwordRef)) {
      setLoader(true);
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
        
            localStorage.setItem("token" ,data.accessToken);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
        
        })
        .catch((error) => console.error("Xatolik:", error))
        .finally(() => {
          setLoader(false);
        });
    }
  }

  return (
    <div className='background'>
      <div className='register__wrapper'>
        <form
          className='register__form'
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <h3 className='register__title'>Login</h3>
          <input ref={usernameRef} type="text" placeholder="Username" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className='register__button' disabled={loader}>
            {!loader ? "Login to your account" : "Loading..."}
          </button>
          <p className='register__description'>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
