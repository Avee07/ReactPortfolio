import React from "react";

const Workitem = ({ year, title, position, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white"></div>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
        </p>
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="my-5 text-lg font-normal leading-none text-stone-800 ">
            {position}
          </span>
        </p>
        <p>
          <span className="my-2 text-base font-normal text-stone-600">
            <ul className="list-disc list-inside text-left">
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </span>
        </p>
      </li>
    </ol>
  );
};

export default Workitem;
