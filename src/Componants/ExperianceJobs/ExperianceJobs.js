import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Experiance from './Experiance';
import { Link } from 'react-router-dom';

const ExperianceJobs = () => {
    const [experiances, setexperiances] = useState([]);
    useEffect(() => {
      fetch("job.json")
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setexperiances(data);
        });
    }, []);
    return (
      <div>
        <div className="mt-4 gap-4">
          <h2 className="text-xl font-bold tracking-tight">Experianced Jobs:</h2>
          {experiances.map((experiance) => (
            <Experiance id={experiance.id} experiance={experiance} />
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

export default ExperianceJobs;