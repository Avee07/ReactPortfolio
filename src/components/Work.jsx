import React from "react";
import Workitem from "./workitem";

const data = [
    {
		"year": 2010,
		"title": "Workitem	",
		"duration": '6 years',
		"details": "Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis"
	},
	{
		"year": 2201,
		"title": "Google",
		"duration": "10 years",
		"details": "lacus pede sagittis augue, eu tempor erat neque non quam."
	},
	{
		"year": 2001,
		"title": "Facebook",
		"duration": '7 years',
		"details": "Curae Donec tincidunt. Donec vitae erat vel pede blandit congue."
	},
	{
		"year": 2210,
		"title": "Instagram",
		"duration": '12 years',
		"details": "ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu,"
	},
	{
		"year": 2031,
		"title": "Infosys,",
		"duration": ' 3 years',
		"details": "Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non"
	}
];

const Work = () => {
  return (
    <div id="work" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
        Work
        {data.map((item, idx) => (
          <Workitem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </h1>
    </div>
  );
};

export default Work;
