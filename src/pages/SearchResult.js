import { hotels } from "../utils/hotels";
import { useParams } from "react-router";
import { useEffect ,useState } from "react";

const SearchResult = () => {
    const { id } = useParams();
    const [hotel,setHotel] = useState(null);

  useEffect(() => {

    const hotel = hotels.find((hotel) => {
 
        return hotel.id === Number(id);
  });
 
    setHotel(hotel);
  }, [id]);

    if (!hotel) {
        return <h1>Hotel not found</h1>;
    }
    return (
        <div>
        <h1>{hotel.name}</h1>
        <h2>Price: ${hotel.price}</h2>
        <h2>Location: {hotel.location}</h2> 
        <p>{hotel.description}</p>
        </div>
    );
    }
export default SearchResult;