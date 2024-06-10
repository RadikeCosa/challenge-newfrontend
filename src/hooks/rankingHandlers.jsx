import apiService from '../service/apiService';

export const handleSearch = async (genre, setGenre, year, setYear, rating, setRating, name, setName, setResults) => {
  console.log("Search initiated with values:");
  console.log("Genre:", genre);
  console.log("Year:", year);
  console.log("Rating:", rating);
  console.log("Name:", name);

  try {
    let result;
    if (genre) {
      result = await apiService.getMoviesByGenre(genre);
    } else if (year) {
      result = await apiService.getMoviesByYear(year);
    } else if (rating) {
      result = await apiService.getRatingByRating(rating);
    } else if (name) {
      result = await apiService.getMoviesByName(name);
    }

    console.log("Search result:", result);
    setResults(result)

  } catch (error) {
    console.error("Error during search:", error);
  }

  setGenre("");
  setYear("");
  setRating("");
  setName("");
};

export const handleGenreChange = (e, setGenre, setYear, setRating, setName) => {
  setGenre(e.target.value);
  console.log("Genre selected:", e.target.value);
  setYear("");
  setRating("");
  setName("");
};

export const handleYearChange = (e, setYear, setGenre, setRating, setName) => {
  setYear(e.target.value);
  console.log("Year selected:", e.target.value);
  setGenre("");
  setRating("");
  setName("");
};

export const handleRatingChange = (e, setRating, setGenre, setYear, setName) => {
  setRating(e.target.value);
  console.log("Rating selected:", e.target.value);
  setGenre("");
  setYear("");
  setName("");
};

export const handleNameChange = (e, setName, setGenre, setYear, setRating) => {
  const newName = e.target.value;
  setName(newName);
  console.log("Name input:", newName);
  setGenre("");
  setYear("");
  setRating("");
};
