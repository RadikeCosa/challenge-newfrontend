import SearchComponent from "../SearchComponent";
import LineChartComponent from './LineChartComponent';
import BarChartComponent from "./BarChartComponent";

const AnalisisComponent = ({ genres, handleChange, genero, dataLine, dataBar }) => {
    
   
   

    return (
        <>
            <SearchComponent
                value={genero}
                handleChange={handleChange}
                options={genres}
                placeholder="Seleccionar género"
            />
            <LineChartComponent data={dataLine} />
            <BarChartComponent data={dataBar} />
        </>
    );
};

export default AnalisisComponent;
