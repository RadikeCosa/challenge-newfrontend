import SearchComponent from "../SearchComponent";
import LineChartComponent from './LineChartComponent';
import BarChartComponent from "./BarChartComponent";
import '../../styles/analisisComponent.css'

const AnalisisComponent = ({ genres, handleChange, genero, dataLine, dataBar }) => {
    
   
   

    return (
        <>
        <h2 className="analisis-title">Analisis</h2>
        <hr />
        <p htmlFor="" className="select-label">Elije un genero Cinematografico</p>
            <SearchComponent className="analisis-select"
                value={genero}
                handleChange={handleChange}
                options={genres}
                placeholder="Seleccionar género"
            />
            <p className="graph-title">Evolucion Temporal</p>
            <LineChartComponent data={dataLine} />
            <BarChartComponent data={dataBar} />
        </>
    );
};

export default AnalisisComponent;
