import React from "react";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-[url(https://imageio.forbes.com/specials-images/imageserve/5fce71245c7f26c56e89bbd5/0x0.jpg?format=jpg&width=1200)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            World largest job recruitment site.
          </h2>

          <p className="hidden max-w-md text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Find your dream job today with our job searching website! Our
            platform connects job seekers with endless opportunities across
            various industries and locations. With a powerful job search engine,
            personalized job recommendations, and user-friendly interface.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="/"
              className="inline-flex items-center rounded-full bg-teal-600 px-8 py-3 text-white shadow-lg transition hover:bg-teal-500 focus:outline-none focus:ring"
            >
              <span className="text-sm font-medium"> UPLOAD YOUR RESUME </span>

              <svg
                className="ml-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
