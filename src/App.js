import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Card from "./Components/Card";
import Spinner from "./Components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiUrl, filterData } from "./data";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  // initially category value is set to be "All"
  const [category, setCategory] = useState(filterData[0].title);

  // API call and feaching data and assigning it to "courses" variable
  async function fetchData() {
    // spinner on => loading = true
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      console.log("courses is set to following:")
      console.log(output.data);

      setCourses(output.data);
    } catch (error) {
      toast.error("Something went wrong...😔");
    }
    // after data is rendered loading = false 
    // spinner off
    setLoading(false);
  }

  // useEffect only called once after whole UI is rendered for API call
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2 ">
      <div>
        <Navbar></Navbar>
      </div>
      
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          ></Filter>
        </div>
        {/* loader and cards */}
        {/* loading is used to check if data from API is rendered or not  */}
        <div className="w-11/12 max-w-[1350px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
          {loading ? (
                     <Spinner></Spinner>
                     ) : (
                     <Cards courses={courses} category={category}></Cards>
                     )
          } 
        </div>
      </div>
  
  );
}

export default App;
