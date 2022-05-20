import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ movieImg, title, year, summary, genres }) {
  return (
    <div>
      <img src={movieImg} alt={title} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <strong>{year}</strong>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  movieImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
