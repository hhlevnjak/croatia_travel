import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import SideMenu from "./sideMenu";
import { AppContext } from "../context/context";
import { RxHamburgerMenu } from "react-icons/rx";
import routes from "../route/routes";
import logo from "../img/logo.png";
import "../styles/navigation.css";

function Navigation() {
  const [openMenu, setOpenMenu] = useState(false);
  const { authInfo, setAuthInfo, notLogged, setNotLogged } =
    useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) setAuthInfo(user);
      else setNotLogged(`User is not logged in`);
    });
    return () => {
      listen();
    };
  }, []);

  const handleTitleClick = () => {
    navigate(routes.home);
  };

  const handleSignIn = () => {
    navigate(routes.signIn);
  };

  return (
    <div>
      <div className="navigationHeader">
        <RxHamburgerMenu onClick={() => setOpenMenu(true)} />
        <div className="headerCentral" onClick={handleTitleClick}>
          <img src={logo} alt="logo"></img>
          <h3>Croatia Travel Advisor</h3>
        </div>
        <div>
          {!authInfo?.displayName && !notLogged ? (
            <div>Checking...</div>
          ) : authInfo?.displayName ? (
            <div>Hi, {authInfo.displayName}!</div>
          ) : (
            <div>
              <div onClick={handleSignIn}>Sign In</div>
            </div>
          )}
        </div>
      </div>
      {openMenu ? (
        <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      ) : null}
    </div>
  );
}

export default Navigation;
