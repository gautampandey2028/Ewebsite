import React, { useEffect, useState } from "react";
import ResData from "./ResData.jsx";
import { NavLink } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 6; // Number of products per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resolve = await fetch("https://dummyjson.com/products");
    const result = await resolve.json();
    setData(result.products);
    setFilteredData(result.products);
  };

  const handleClick = () => {
    let filterData = data.filter((curr) => curr.rating > 4.3);
    setFilteredData(filterData);
    setCurrentPage(1);
    setShowAll(false);
  };

  const handleSearch = () => {
    let filterSearch = data.filter((curr) =>
      curr.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filterSearch);
    setSearch("");
    setCurrentPage(1);
    setShowAll(false);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = showAll ? filteredData : filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {/* Search & Filter Buttons */}
      <div className="flex items-center justify-center my-4">
        <input
          className="border border-solid border-black rounded-lg p-2"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        <button className="m-3 bg-green-300 px-4 py-2 rounded-lg" onClick={handleSearch}>
          SEARCH
        </button>
        <button className="m-3 bg-blue-300 px-5 py-2 rounded-lg" onClick={handleClick}>
          TOP PRODUCTS
        </button>
      </div>

      {/* Products List */}
      <div className="flex flex-wrap bg-slate-100 justify-center">
        {currentItems.map((curr) => (
          <NavLink to={`/details/${curr.id}`} key={curr.id}>
            <ResData resdata={curr} />
          </NavLink>
        ))}
      </div>

      {/* Pagination Controls */}
      {!showAll && totalPages > 1 && (
        <div className="flex justify-center my-6">
          <button
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
            }`}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`px-4 py-2 mx-1 rounded-lg ${
              currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"
            }`}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Show All Products Button */}
      <div className="flex justify-center my-6">
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Paginated View" : "Show All Products"}
        </button>
      </div>
    </>
  );
};

export default Shop;
