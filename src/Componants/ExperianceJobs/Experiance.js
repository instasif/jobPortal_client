import React from 'react';
import { Link } from "react-router-dom";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

const Experiance = ({experiance}) => {
    const {
      id,
      jobTitle,
      JobDetails,
      address,
      reviews,
      Schedule,
      company,
      img,
    } = experiance;
    return (
      <div>
        <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 mb-2 sm:w-50">
          <div className="flex items-start sm:gap-8">
            <div
              class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:mt-10"
              aria-hidden="true"
            >
              <div class="flex items-center gap-1">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h3 className="mt-4 text-lg font-medium sm:text-xl">
                <a href="/" className="hover:underline">
                  {" "}
                  {jobTitle}{" "}
                </a>
              </h3>
              <h4 className="font-medium">{company}</h4>

              <div className=" sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <FaStar className="text-yellow-300" />
                    <FaStarHalfAlt className="text-yellow-300" />
                  </div>

                  <p className="text-xs  font-medium">{reviews}</p>
                </div>
              </div>

              {JobDetails.length > 100 ? (
                <p className="mt-1 text-sm text-gray-700">
                  {JobDetails.slice(0, 300) + "..."}{" "}
                  <Link
                    className="hover:underline text-md font-bold"
                    to={`/jobs/${id}`}
                  >
                    Details
                  </Link>
                </p>
              ) : (
                <p className="mt-1 text-sm text-gray-700">{JobDetails}</p>
              )}
              <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>

                  <p className="text-xs font-medium">{Schedule}</p>
                </div>

                <span className="hidden sm:block" aria-hidden="true">
                  &middot;
                </span>

                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                  {address}{" "}
                </p>
              </div>

              <strong className="inline-block rounded border border-indigo-600 bg-indigo-600 px-7 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 hover:underline justify-end">
                <Link to="/apply">Apply now!</Link>
              </strong>
            </div>
          </div>
        </article>
      </div>
    );
};

export default Experiance;