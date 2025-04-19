

import SearchComp from "../components/SearchComp";
const Home = () => {

    return (
        <div className="home">
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <SearchComp setResults={()=>{}} page={"home"} />
        </div>
    );
}
export default Home;