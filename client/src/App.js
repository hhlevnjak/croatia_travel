import { useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContext } from "./context/context";
import Home from "./pages/home";
import Towns from "./pages/towns";
import Nature from "./pages/nature";
import History from "./pages/history";
import Entertainment from "./pages/entertainment";
import Destination from "./pages/destination";
import Search from "./pages/searchResultsPage";
import SignUp from "./components/auth/signUp";
import SignIn from "./components/auth/signIn";
import TermsOfUse from "./pages/fromFooter/termsOfUse";
import AboutUs from "./pages/fromFooter/aboutUs";
import ContactUs from "./pages/fromFooter/contactUs";
import TopRated from "./pages/topRated";
import axios from "axios";
import routes from "./route/routes";

function App() {
  const { setDestinationsArray } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`https://croatia-travel.onrender.com/api`)
      .then((res) => setDestinationsArray(res.data));
  }, []);

  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.towns,
      element: <Towns />,
    },
    {
      path: routes.nature,
      element: <Nature />,
    },
    {
      path: routes.history,
      element: <History />,
    },
    {
      path: routes.entertainment,
      element: <Entertainment />,
    },
    {
      path: routes.topRated,
      element: <TopRated />,
    },
    {
      path: routes.search,
      element: <Search />,
    },
    {
      path: `${routes.destination}/:id`,
      element: <Destination />,
    },
    {
      path: routes.signUp,
      element: <SignUp />,
    },
    {
      path: routes.signIn,
      element: <SignIn />,
    },
    {
      path: routes.termsOfUse,
      element: <TermsOfUse />,
    },
    {
      path: routes.aboutUs,
      element: <AboutUs />,
    },
    {
      path: routes.contactUs,
      element: <ContactUs />,
    },
    {
      path: `*`,
      element: <Home />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
