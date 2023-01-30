import React, { useState, useEffect } from "react";
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";
import News from "../components/News";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [result, setResult] = useState([]);
  const fetch_HomeNews = async () => {
    try {
      const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
      );
      setResult(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch_HomeNews();
  }, []);

  return (
    <div className="w-full ">
      <div className="bg-[#010100]/30 backdrop-blur-md w-[368px]  md:w-[440px] fixed z-20 top-0 py-7 px-4  text-[#d7d8db] flex justify-center items-center  ">
        <span className="font-semibold text-lg text-center mr-14 md:mr-0">Home</span>
      </div>
      <div className="w-full h-full flex pt-20 items-center justify-center ">
        {result.length > 0 ? (
          <div className="pl-4">
            {result.map((topData) => (
              <News key={topData.title} data={topData} />
            ))}
            ;
          </div>
        ) : (
          <div className="h-full w-full mr-10 md:mr-0  md:w-96 min-h-screen flex justify-center items-center pl-4 ">
            <HashLoader color="#d7d8db" size={40} speedMultiplier={2} />
          </div>
        )}
        ;
      </div>
    </div>
  );
}

export default Home;
