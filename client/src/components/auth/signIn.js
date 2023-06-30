import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import routes from "../../route/routes";
import { useNavigate } from "react-router-dom";
import Navigation from "../navigation";
import "../../styles/signInUp.css"

function SignIn() {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .catch(() => setError(`Email or password incorrect`));

      navigate(-1)
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleClickToSignUp = () => {
    navigate(routes.signUp);
  };

  return (
    <>
      <Navigation />
      <div className="signInUp">
        <div className="signInUpTitle">Sign In:</div>
        {error}
        <form className="signInUpForm" onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            maxLength={30}
            required
          ></input>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            maxLength={15}
            required
          ></input>
          <button type="submit">Submit</button>
        </form>
        <button className="goBackButtonSignIn" onClick={handleGoBack}>
          Go Back
        </button>
        <div className="dontHaveAcc">
          Don't have an account?{" "}
          <span style={{ color: `#00af87` }} onClick={handleClickToSignUp}>
            Sign up
          </span>
        </div>
      </div>
    </>
  );
}

export default SignIn;
