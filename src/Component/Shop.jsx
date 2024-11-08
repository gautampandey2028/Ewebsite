import React, { useEffect, useState } from "react";
import ResData from "./resData";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Separate state for filtered data
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resolve = await fetch("https://dummyjson.com/products");
    const result = await resolve.json();
    console.log(result.products);
    setData(result.products);
    setFilteredData(result.products); // Initialize both data and filteredData
  };

  const handleClick = () => {
    let filterData = data.filter((curr) => {
      return curr.rating > 4.3;
    });
    console.log(filterData);
    setFilteredData(filterData); // Only update filteredData, not data
  };

  const handlesearch = () => {
    let filterSearch = data.filter((curr) =>
      curr.description.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filterSearch);

    setFilteredData(filterSearch);
    setSearch("");
  };
  return (
    <>
     <div className="flex items-center" >
     <div className="p-3 m-1">
        <input
          className="border border-solid border-black rounded-lg"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          
        />
        <button className=" m-3 bg-green-300 px-4 rounded-lg" onClick={handlesearch}>
          SEARCH
        </button>
      </div>
      
        <button className="m-3 bg-blue-300 px-5 rounded-lg  " onClick={handleClick}>
          TOP PRODUCTS
        </button>
        </div>
      
      <div className="flex  flex-wrap bg-slate-100 ">
        {filteredData.map((curr) => (
          
          <NavLink to={`/details/${curr.id}`}>
           
            <ResData key={curr.id} resdata={curr} />
          </NavLink>
        ))}
      </div>
    
    </>
  );
};

export default Shop;
