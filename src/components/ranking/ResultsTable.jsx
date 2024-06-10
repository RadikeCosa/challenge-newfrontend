import '../../styles/resultsTable.css';
import { useAuth } from '../../auth/AuthContext';
import handleClickRow from '../../hooks/handleClickRow';

const ResultsTable = ({ results }) => {
  const { user } = useAuth(); // Obtén el usuario autenticado desde el contexto
  const userId = user.id; // Extrae el userId

  

  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Title</th>
          <th>Genres</th>
          <th>Avg Rating</th>
        </tr>
      </thead>
      <tbody>
        {results.map((movie, index) => (
          <tr
            key={movie.id}
            className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            onClick={() => handleClickRow(userId, movie.id)}
          >
            <td>{new Date(movie['Release Date']).getFullYear()}</td>
            <td>{movie.Name}</td>
            <td>
              {Object.keys(movie)
                .filter(
                  (key) =>
                    movie[key] === '1' &&
                    !['id', 'Name', 'Release Date', 'IMDB URL', 'avg_rating'].includes(key)
                )
                .join(', ')}
            </td>
            <td>{movie.avg_rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
