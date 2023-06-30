import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import axios from "axios";
import Navigation from "../navigation";
import "../../styles/signInUp.css";

function SignUp() {
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [passwordC, setPasswordC] = useState(``);
  const [error, setError] = useState(null);
  const [usernamesList, setUsernamesList] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/usernames`).then((response) => {
      setUsernamesList(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usernamesList.includes(username.toLowerCase()))
      return setError(`Username is already in use`);
    else if (username.length < 3)
      return setError(`Username must be at least 3 characters long`);
    else if (password.length < 6)
      return setError(`Password must be at least 6 characters long`);
    else if (password !== passwordC)
      return setError(`Passwords must be the same`);

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: `${username}`,
        })
          .then(() => {
            auth.currentUser.reload().then(() => {});
          })
          .then(() => {
            const objectToSend = { username };
            axios
              .post("http://localhost:5000/api/usernames", objectToSend)
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .then(() => {
            navigate(-2);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => console.error(err));
  };

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navigation />
      <div className="signInUp">
        <div>{error}</div>
        <div>
          <div className="signInUpTitle">Sign Up:</div>
          <form className="signInUpForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
              type="text"
              maxLength={10}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <label>Email</label>
            <input
              type="email"
              maxLength={30}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <label>Password</label>
            <input
              type="password"
              maxLength={15}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <label>Confirm Password</label>
            <input
              type="password"
              maxLength={15}
              onChange={(e) => setPasswordC(e.target.value)}
              required
            ></input>
            <button type="submit">Submit</button>
            <button className="goBackButtonSignUp" onClick={navigateBack}>
              Go Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
