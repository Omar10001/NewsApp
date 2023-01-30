import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "usehooks-ts";

import HashLoader from "react-spinners/HashLoader";
import News from "../components/News";


function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedValue = useDebounce(searchTerm, 800);
  
  
  const [Explore, setExplore] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const fetchExplore = async (keyword) => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=${keyword}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
      );
      setExplore(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExplore(searchTerm);
  }, [debouncedValue]);

  return (
    <div className="">
      <div className="bg-[#010100]/30 backdrop-blur-md fixed z-20 top-0 py-7 px-4  ">
        <input
          type="text"
          placeholder="Search Keyword"
          className="px-3 rounded-full w-[413px] h-9 bg-[#282d2f]  text-[#d7d8db]   "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="w-full h-full flex pt-20 items-center justify-center">
        {Explore.length > 0 ? (
          <div className="pl-4">
            {Explore.map((all, index) => (
              <News key={index} data={all} />
            ))}
            ;
          </div>
        ) : (
          <div className="h-full w-96 min-h-screen flex justify-center items-center pl-4 ">
            <HashLoader color="#d7d8db" size={40} speedMultiplier={2} />
          </div>
        )}
        ;
      </div>
    </div>
  );
}

export default Explore;
