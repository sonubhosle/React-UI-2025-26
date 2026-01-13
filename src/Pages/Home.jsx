import { Link, useLocation } from "react-router-dom";
import { Categories } from "../Components/Categories";



const Home = () => {
 const location = useLocation();

     const hidelayout = location.pathname  === '/login' || location.pathname === '/signup';
     
  return (
     <div>
      {
        !hidelayout && <Categories/>
      }
     </div>
  );
};

export default Home;

// http://localhost:8080/api/filter/:name
