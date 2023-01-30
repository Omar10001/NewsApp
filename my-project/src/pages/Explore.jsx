import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "usehooks-ts";

import HashLoader from "react-spinners/HashLoader";
import News from "../components/News";

function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [category, setCategory] = useState("");

  const debouncedValue = useDebounce(searchTerm, 800);
  
  const [Explore, setExplore] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const fetchExplore = async (keyword) => {
    try {
      const { data } = await axios.get(
      `https://newsapi.org/v2/everything?q=${keyword}&searchIn=title&sources=${categoryTerm}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
      );
      setExplore(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${apiKey}`
      );
      setCategory(data.sources);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExplore(searchTerm);
    fetchCategory();
  }, [debouncedValue]);

  return (
    <div className="">
      <div className="bg-[#010100]/30 backdrop-blur-md w-[368px]  md:w-[440px] fixed z-20 top-0 py-7 px-4  text-[#d7d8db] flex justify-center items-center ">
        <input
          type="text"
          placeholder="Search Keyword"
          className="px-3 rounded-full w-[413px]  md:w-[413px] h-9 bg-[#282d2f]  text-[#d7d8db] focus:outline-[#ff9900] focus:outline-none mr-16 md:mr-0 md:ml-2   "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          onChange={(e) => setCategoryTerm(e.target.value)}
          name="source-select"
          className="absolute right-7 w-40 bg-[#282d2f] text-white"
        >
          {Object.values(category).map((caty, index) => {
            return (
              <option key={index} className="capitalize" value={caty.name}>
                {caty.name}
              </option>
            );
          })}
        </select>
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
          <div className="h-full w-[290px] min-h-screen flex justify-center items-center pl-4 text-white ">
            <span className="font-light">Type what interest you </span>
          </div>
        )}
        ;
      </div>
    </div>
  );
}

export default Explore;
