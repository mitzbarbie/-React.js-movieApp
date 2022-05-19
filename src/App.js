import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading!!!!!</h1>
      ) : (
        <div>
          {movies.map((m) => (
            <div key={m.id}>
              <img src={m.medium_cover_image} />
              <h2>{m.title}</h2>
              <strong>{m.year}</strong>
              <p>{m.summary}</p>
              <ul>
                {m.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
