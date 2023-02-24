import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Fresher from "./Fresher";
import { Link } from 'react-router-dom';

const Freshers = () => {
  const [freshers, setFreshers] = useState([]);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setFreshers(data);
      });
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-xl text-center mt-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Explore diffrent types of jobs
        </h2>
      </div>

      <div className="mt-4 gap-4">
        <h2 className="text-xl font-bold tracking-tight">Freshers Jobs:</h2>
        {freshers.map((fresher) => (
          <Fresher id={fresher.id} fresher={fresher} />
        ))}
      </div>

      <div className="flex justify-end"> 
        <Link
          class="inline-block rounded-full bg-teal-600 hover:bg-teal-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
          to="/s"
        >
          <span class="block rounded-full bg-white px-8 py-3 text-sm font-medium hover:bg-transparent">
            See more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Freshers;
