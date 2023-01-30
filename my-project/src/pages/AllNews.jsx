import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDebounce } from "usehooks-ts";

import HashLoader from "react-spinners/HashLoader";
import News from "../components/News";


function AllNews() {
  const [sourceTerm, setSourceTerm] = useState("");
  const debouncedValue = useDebounce(sourceTerm, 700);
  
  
  const [allNews, setAllNews] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const fetchAllNews = async (source) => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?sources=${source}&language=en&sortBy=publishedAt&apiKey=${apiKey}`
      );
      setAllNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllNews(sourceTerm);
  }, [debouncedValue]);

  return (
    <div className="">
      <div className="bg-[#010100]/30 backdrop-blur-md fixed z-20 top-0 py-7 px-4  ">
        <input
          type="text"
          placeholder="Search Source"
          className="px-3 rounded-full w-[413px] h-9 bg-[#282d2f]  text-[#d7d8db]    "
          value={sourceTerm}
          onChange={(e) => setSourceTerm(e.target.value)}
        />
      </div>
      <div className="w-full h-full flex pt-20 items-center justify-center">
        {allNews.length > 0 ? (
          <div className="pl-4">
            {allNews.map((all) => (
              <News key={all.title} data={all} />
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

export default AllNews;
