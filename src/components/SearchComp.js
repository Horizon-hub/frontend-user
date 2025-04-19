import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { hotels } from "../utils/hotels";
const SearchComp = ({ page ,setResults}) => {
    const navigate = useNavigate();
    const locationHook = useLocation();

    const [location, setLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [redirected_location, setRedirectedLocation] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(locationHook.search);
        setLocation(params.get("location") || "");
        setStartDate(params.get("startDate") || "");
        setEndDate(params.get("endDate") || "");
        setRedirectedLocation(params.get("location") || "");
      
    }, [locationHook.search]);
    useEffect(()=>{
        if (page === "search") {
            loadResults(redirected_location);
        }
    },[redirected_location])

    const handleSearch = () => {
        if (!location || !startDate || !endDate) {
            alert("Please fill in all the fields.");
            return;
        }

        const params = new URLSearchParams({
            location,
            startDate,
            endDate,
        });

        if (page === "home") {
            navigate(`/search?${params.toString()}`);
        } else {
           
            loadResults(location);
        
        }
    };
    const loadResults=(location)=>{
        setResults(hotels.filter((hotel) => hotel.location === location));
    }

    return (
        <div>
            <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            >
                <option value="" disabled>Select Location</option>
                <option values="damascus">Damascus</option>
                <option value="halab">Halab</option>
                <option value="homes">Homs</option>
                <option value="latakia">Latakia</option>
            </select>
        
            <input
                type="date"
                className="search-input"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />
            <input
                type="date"
                className="search-input"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
                Search
            </button>
        </div>
    );
};

export default SearchComp;
