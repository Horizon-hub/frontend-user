import { useState } from "react";
import SearchComp from "../components/SearchComp";
import SearchResults from "../components/SearchResults";
import { hotels } from "../utils/hotels";
const Search = () => {
    const [results, setResults] = useState([]);
    return (
        <div>
            <SearchComp results={results} setResults={setResults} page={"search"}/>
            <SearchResults  results={results} />
        </div>
    );
    }
export default Search;