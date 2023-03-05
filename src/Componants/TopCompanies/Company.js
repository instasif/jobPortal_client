import React from 'react';
import { Link } from 'react-router-dom';

const Company = ({company}) => {
    const {name, details, img} = company;
    return (
      <article class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <span class="inline-block rounded p-2 text-white">
          <img src={img} alt="" />
        </span>

        <a href="/">
          <h3 class="mt-0.5 text-lg font-medium text-gray-900">
            {name}
          </h3>
        </a>

        <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {details}
        </p>

        <Link
          to='/'
          class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
        >
          Find out more
          <span
            aria-hidden="true"
            class="block transition group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </Link>
      </article>
    );
};

export default Company;