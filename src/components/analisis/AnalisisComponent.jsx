import { useState } from "react";
import SearchComponent from "../SearchComponent";
import LineChartComponent from './LineChartComponent'
import BarChartComponent from "./BarChartComponent";


const genres = [{
  "id": 1,
  "name": "Animation"
},
{
  "id": 2,
  "name": "Children's"
},
{
  "id": 3,
  "name": "Comedy"
},
{
  "id": 4,
  "name": "Action"
},
{
  "id": 5,
  "name": "Adventure"
},
{
  "id": 6,
  "name": "Thriller"
},
{
  "id": 7,
  "name": "Drama"
},
{
  "id": 8,
  "name": "Crime"
},
{
  "id": 9,
  "name": "Sci-Fi"
},
{
  "id": 10,
  "name": "War"
},
{
  "id": 11,
  "name": "Romance"
},
{
  "id": 12,
  "name": "Horror"
},
{
  "id": 13,
  "name": "Musical"
},
{
  "id": 14,
  "name": "Documentary"
},
{
  "id": 15,
  "name": "Western"
},
{
  "id": 16,
  "name": "Fantasy"
},
{
  "id": 17,
  "name": "Film-Noir"
},
{
  "id": 18,
  "name": "Mystery"
}]

const AnalisisComponent = () => {
    const {genero, setGenero} = useState("")
  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };
  const dataLine =[
    {
        "year": "1922",
        "averageRating": 3.6
    },
    {
        "year": "1935",
        "averageRating": 3.6
    },
    {
        "year": "1945",
        "averageRating": 3.5
    },
    {
        "year": "1958",
        "averageRating": 2.7
    },
    {
        "year": "1960",
        "averageRating": 4.1
    },
    {
        "year": "1963",
        "averageRating": 3.8
    },
    {
        "year": "1968",
        "averageRating": 3
    },
    {
        "year": "1974",
        "averageRating": 3.1
    },
    {
        "year": "1975",
        "averageRating": 3.8
    },
    {
        "year": "1976",
        "averageRating": 3.1
    },
    {
        "year": "1977",
        "averageRating": 2.2
    },
    {
        "year": "1978",
        "averageRating": 2.7
    },
    {
        "year": "1979",
        "averageRating": 3.3
    },
    {
        "year": "1980",
        "averageRating": 3.3
    },
    {
        "year": "1981",
        "averageRating": 3
    },
    {
        "year": "1982",
        "averageRating": 2.3
    },
    {
        "year": "1983",
        "averageRating": 1.5
    },
    {
        "year": "1984",
        "averageRating": 3.2
    },
    {
        "year": "1986",
        "averageRating": 2.5
    },
    {
        "year": "1987",
        "averageRating": 3.1
    },
    {
        "year": "1990",
        "averageRating": 1.3
    },
    {
        "year": "1991",
        "averageRating": 1.6
    },
    {
        "year": "1992",
        "averageRating": 2.8
    },
    {
        "year": "1993",
        "averageRating": 2.3
    },
    {
        "year": "1994",
        "averageRating": 2.6
    },
    {
        "year": "1995",
        "averageRating": 2.4
    },
    {
        "year": "1996",
        "averageRating": 2.5
    },
    {
        "year": "1997",
        "averageRating": 3.1
    },
    {
        "year": "1998",
        "averageRating": 2.8
    }]
  const dataBar ={ 
        "1": 503,
        "2": 814,
        "3": 1514,
        "4": 1611,
        "5": 878}

  return (
    <>
      <SearchComponent
        value={genero}
        handleChange={handleGeneroChange}
        options={genres}
        placeholder="Seleccionar género"
      />
      <LineChartComponent data={dataLine}/>
      <BarChartComponent data={dataBar}/>
    </>
  );
};

export default AnalisisComponent;
