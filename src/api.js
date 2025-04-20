export const getLocations = async () => {
    const api_endpoint = 'http://localhost:3000/api/locations'; // Replace with your actual API endpoint
    const response = await fetch(api_endpoint);
    const data = await response.json();
    return data

}