import  { useState } from "react";
import SearchComponent from "../SearchComponent";
import SearchButtonComponent from "./SearchButtonComponent";
import '../../styles/rankingComponent.css';
import { 
  handleSearch, 
  handleGenreChange, 
  handleYearChange, 
  handleRatingChange, 
  handleNameChange 
} from '../../hooks/rankingHandlers'
import ResultsTable from "./ResultsTable";

const RankingComponent = ({years, genres}) => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [results, setResults] = useState([])

  
  return (
    <div className="ranking-container">
    <h3>Puntuar Film</h3>
    <div className="filter-row">
      <SearchComponent
        value={genre}
        handleChange={(e) => handleGenreChange(e, setGenre, setYear, setRating, setName)}
        options={genres}
        placeholder="Select Genre"
      />
      <SearchComponent
        value={year}
        handleChange={(e) => handleYearChange(e, setYear, setGenre, setRating, setName)}
        options={years}
        placeholder="Select Year"
      />
      <SearchComponent
        value={rating}
        handleChange={(e) => handleRatingChange(e, setRating, setGenre, setYear, setName)}
        options={[{ id: '1', name: '1' }, { id: '2', name: '2' }, { id: '3', name: '3' }, { id: '4', name: '4' }, { id: '5', name: '5' }]}
        placeholder="Select Rating"
      />
      <SearchComponent
        type="input"
        value={name}
        handleChange={(e) => handleNameChange(e, setName, setGenre, setYear, setRating)}
        placeholder="Select Name"
      />
    </div>
    <div className="button-container">
      <SearchButtonComponent 
        onClick={() => handleSearch(genre, setGenre, year, setYear, rating, setRating, name, setName, setResults)} 
        label="Filtrar" 
      />
    </div>
    {results.length > 0 && <ResultsTable results={results} />}  {/* Utilizar el nuevo componente */}

  </div>
  );
};

export default RankingComponent;
