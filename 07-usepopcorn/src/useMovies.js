import { useEffect, useState } from "react";
const KEY = "dd14aacb";

export function useMovies(query){
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


    useEffect(
        function () {
        // callback?.();

          const controller = new AbortController();
    
          async function fetchMovies() {
            try {
              setIsLoading(true);
              setError("");
    
              const response = await fetch(
                `http://www.omdbapi.com/?&apikey=${KEY}&s=${query}`,
                { signal: controller.signal }
              );
    
              if (!response.ok) {
                throw new Error("Something went wrong while fetching movies...");
              }
    
              const data = await response.json();
    
              if (data.Response === "False") {
                throw new Error("Movie not found...");
              }
              setMovies(data.Search);
              setError("");
            } catch (error) {
              console.log(error.message);
              if (error.name !== "AbortError") {
                setError(error.message);
              }
            } finally {
              setIsLoading(false);
            }
          }
    
          if (query.length < 3) {
            setMovies([]);
            setError("");
            return;
          }
    
        //   handleCloseMovie();
          fetchMovies();
    
          return function cleanup() {
            controller.abort();
          };
        },
        [query]
      );
    return {movies, isLoading, error}
}