import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(Component) {
  return function Context(props) {
    const [authInfo, setAuthInfo] = useState(null);
    const [destinationsArray, setDestinationsArray] = useState(null);
    const [destination, setDestination] = useState(null);
    const [search, setSearch] = useState(null);
    const [notLogged, setNotLogged] = useState(null);

    const valuesToShare = {
      destinationsArray,
      setDestinationsArray,
      destination, 
      setDestination,
      search,
      setSearch,
      authInfo,
      setAuthInfo,
      notLogged,
      setNotLogged,
    };

    return (
      <AppContext.Provider value={valuesToShare}>
        <Component {...props} />
      </AppContext.Provider>
    );
  };
}
