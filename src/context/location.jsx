import { createContext, useContext } from "react";
import { useState } from "react";
const LocationContext = createContext();
export const Location = ({ children }) => {
  const cityList = ["Lagos", "Abuja", "Port Harcourt", "Kano"];
  const [city, setCity] = useState("Lagos");
  return (
    <LocationContext.Provider value={{ city, setCity, cityList }}>
      {children}
    </LocationContext.Provider>
  );
};
export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used inside LocationProvider");
  } else {
    return context;
  }
};
