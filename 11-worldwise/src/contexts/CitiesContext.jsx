import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
      const [isloading, setIsLoading] = useState(false);
    
      useEffect(function () {
        async function fetchCities() {
          try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities`);
            const data = await res.json();
            setCities(data);
          } catch (err) {
            alert("That was an error loading data");
          } finally {
            setIsLoading(false);
          }
        }
        fetchCities();
      }, []);
    
      return (
        <CitiesContext.Provider value={{ cities, isloading }}>
          {children}
        </CitiesContext.Provider>
      );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === "undefined")
    throw new Error("CitiesContext was used outside of its Provider");
  return context;
}

export { CitiesProvider, useCities };
