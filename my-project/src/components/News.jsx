import React from "react";

function News({ data }) {
  return (
    <div className="mt-7 bg-[#010100]  w-[290px]  md:w-[420px] h-fit flex flex-col rounded-xl p-3 gap-2 group/card transition-all duration-200  text-[#d7d8db] hover:bg-[#282d2f] cursor-pointer relative z-10 overflow-hidden  ">
      <img
        className="object-cover w-full h-48 rounded-lg border border-[#282d2f] group-hover/card:h-60 transition-all duration-200 "
        src={data.urlToImage}
        alt=""
      />
      <div className="flex flex-col group gap-2 ">
        <div className="flex flex-col -space-y-1 group-hover/card:text-lg duration-500">
          <span className=" font-light">{data.source.name}</span>
          <span className="font-semibold leading-6 ">{data.title}</span>
        </div>
        <span className="text-[#586068] group-hover/card:text-[#d7d8db] font-light leading-5 ">
          {data.description}
        </span>
      </div>
    </div>
  );
}

export default News;
