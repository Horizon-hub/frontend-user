import "./SearchResults.css"
import { useNavigate } from "react-router";

const SearchResults = ({ results }) => {
   const navigate = useNavigate();
    const handleResultClick = (id) => {
        navigate(`/search/${id}`);
    };

    return (
        <div className="search-results">
        {results.map((result) => (
            <div key={result.id} className="search-result">
            <h2>{result.name}</h2>
            <p>{result.description}</p>
            <p>Price: ${result.price}</p>
            <p>City : {result.location}</p>
            {!result.isActive &&<p style={{background:"pink"}}> Not available</p>}
            {result.isActive &&<button className="btn" onClick={()=>{
                handleResultClick(result.id);
            }}> Book Now</button>}
            </div>
        ))}
        </div>
    );
    }
export default SearchResults;