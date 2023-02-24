import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Company from './Company';

const TopCompanies = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() =>{
        fetch('companies.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setCompanies(data);
        })
    },[])
    return (
      <div>
        <div className="mt-4 gap-4">
          <h2 className="text-xl font-bold tracking-tight">
            Top Companies:
          </h2>
          <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 md:gird-cols-2'>
            {companies.map((company) => (
              <Company id={company.id} company={company} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default TopCompanies;