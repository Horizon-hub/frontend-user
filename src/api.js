export const getLocations = async () => {
    const api_endpoint = 'http://localhost:3000/api/locations'; // Replace with your actual API endpoint
    const response = await fetch(api_endpoint);
    const data = await response.json();
    return data

}

export const getRooms = async (location_id) => {
    const api_endpoint = 'http://localhost:3000/api/rooms/'+location_id; // Replace with your actual API endpoint
    const response = await fetch(api_endpoint);
    if (!response.ok) {
        console.error('Error fetching rooms:', response.statusText);
        return [];
    }
    const data = await response.json();
    
    return data
}

