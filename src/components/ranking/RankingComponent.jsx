import  { useState } from "react";
import SearchComponent from "../SearchComponent";
import SearchButtonComponent from "./SearchButtonComponent";
import '../../styles/rankingComponent.css';

const RankingComponent = () => {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");

  const handleSearch = () => {
    console.log("Search initiated with values:");
    console.log("Genre:", genre);
    console.log("Year:", year);
    console.log("Rating:", rating);
    console.log("Name:", name);

    // Restablecer los otros campos cuando uno es seleccionado
    setGenre("");
    setYear("");
    setRating("");
    setName("");
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    console.log("Genre selected:", e.target.value);
    setYear("");
    setRating("");
    setName("");
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    console.log("Year selected:", e.target.value);
    setGenre("");
    setRating("");
    setName("");
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    console.log("Rating selected:", e.target.value);
    setGenre("");
    setYear("");
    setName("");
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    console.log("Name input:", newName);
    setGenre("");
    setYear("");
    setRating("");
  };
  return (
    <div className="ranking-container">
      <h3>Puntuar Film</h3>
      <div className="filter-row">
      <SearchComponent
        value={genre}
        handleChange={handleGenreChange}
        options={[{ id: '1', name: 'Action' }, { id: '2', name: 'Comedy' }]} // Deberás pasar las opciones reales aquí
        placeholder="Select Genre"
      />
      <SearchComponent
        value={year}
        handleChange={handleYearChange}
        options={[{ id: '1', year: '1995' }, { id: '2', year: '2000' }]} // Deberás pasar las opciones reales aquí
        placeholder="Select Year"
      />
      <SearchComponent
        value={rating}
        handleChange={handleRatingChange}
        options={[{ id: '1', name: '1' }, { id: '2', name: '2' }, { id: '3', name: '3' }, { id: '4', name: '4' }, { id: '5', name: '5' }]}
        placeholder="Select Rating"
      />
      <SearchComponent
      type="input"
        value={name}
        handleChange={handleNameChange}
        placeholder="Select Name"
        />
        </div>
        <div className="button-container">
          <SearchButtonComponent onClick={handleSearch} label="Filtrar"/>
        </div>
    </div>
  );
};

export default RankingComponent;
