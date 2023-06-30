import { useNavigate } from "react-router-dom";
import "../styles/footer.css";
import routes from "../route/routes";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (el) => {
    if (el === `termsOfUse`) navigate(routes.termsOfUse);
    else if (el === `aboutUs`) navigate(routes.aboutUs);
    else navigate(routes.contactUs);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <ul>
        <li onClick={() => handleClick(`termsOfUse`)}>Terms of use</li>
        <li onClick={() => handleClick(`aboutUs`)}>About Us</li>
        <li onClick={() => handleClick(`contactUs`)}>Contact us</li>
      </ul>
    </div>
  );
}

export default Footer;
