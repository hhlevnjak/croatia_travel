import { signOut } from "firebase/auth";
import { AppContext } from "../context/context";
import { useContext } from "react";
import { auth } from "../firebase";
import { BsBackspace } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import routes from "../route/routes";
import "../styles/sideMenu.css";

function SideMenu({ setOpenMenu }) {
  const { authInfo, setAuthInfo } = useContext(AppContext);

  const navigate = useNavigate();

  const handleClickSignOut = () => {
    signOut(auth)
      .then(() => setAuthInfo(null))
      .catch((err) => console.log(err));
  };

  const handleOpenMenu = () => {
    setOpenMenu(false);
  };

  const handleClickSignIn = () => {
    navigate(routes.signIn);
  };

  return (
    <div className="sideMenu">
      <div className="slideMenuBackButtonDiv">
        <BsBackspace className="slideMenuBackButton" onClick={handleOpenMenu} />
      </div>
      {authInfo ? (
        <button className="slideMenuSignInButton" onClick={handleClickSignOut}>
          Sign Out
        </button>
      ) : (
        <button className="slideMenuSignInButton" onClick={handleClickSignIn}>
          Sign In
        </button>
      )}
      <ul className="sideMenuList">
        {" "}
        <li onClick={() => navigate(routes.home)}>Home</li>
        <li onClick={() => navigate(routes.nature)}>Nature</li>
        <li onClick={() => navigate(routes.towns)}>Towns</li>
        <li onClick={() => navigate(routes.history)}>History</li>
        <li onClick={() => navigate(routes.entertainment)}>Entertainment</li>
      </ul>
      <ul className="sideMenuList">
        <li onClick={() => navigate(routes.termsOfUse)}>Terms of use</li>
        <li onClick={() => navigate(routes.aboutUs)}>About Us</li>
        <li onClick={() => navigate(routes.contactUs)}>Contact us</li>
      </ul>
    </div>
  );
}

export default SideMenu;
