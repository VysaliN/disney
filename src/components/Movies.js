import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import "./Movies.css";

const Movies = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const imageURL = "http://image.tmdb.org/t/p/w342";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie) =>
            movie?.poster_path &&
            movie?.backdrop_path && (
              <Link
                to="/detail"
                state={{
                  movie: movie,
                  id: movie.id,
                  url: "http://image.tmdb.org/t/p/original",
                  img: `${movie.backdrop_path}`,
                }}
                className="link"
              >
                <img
                  key={movie.id}
                  className={`row_poster ${isLarge && "row_posterLarge"}`}
                  src={`${imageURL}${movie.poster_path}`}
                />
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Movies;
