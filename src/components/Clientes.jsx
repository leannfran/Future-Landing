import React from 'react';

const Clientes = () => {
    return (
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 p-4 pb-8 rounded-xl bg-gray-100">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/future-landing.appspot.com/o/macboock.png?alt=media&token=19dc2cd7-cc77-40bf-9e7a-7274b4a18d23&_gl=1*1sk5erw*_ga*MTYwNzk3NjQyNS4xNjc2MzgyMzU3*_ga_CW55HF8NVT*MTY4NTgwNTA4OS4yNi4xLjE2ODU4MDgwODQuMC4wLjA."
            className="object-cover rounded-xl w-full md:w-auto md:max-w-sm -mt-20 drop-shadow-2xl"
            alt="fondo"
            loading="lazy"
          />
        </div>
        <div>
          <div className="flex items-center gap-4">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                  </g>
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">Somos Nyka - Ecommerce </h2>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z"></path>
              </g>
            </svg>
          </div>
          <p className="my-4 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
            quibusdam ducimus libero ad tempora doloribus expedita laborum
            saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
            dolorum, obcaecati corrupti aspernatur a.
          </p>
          <div className="mb-8">
            <h4 className="text-lg text-black font-bold">
Karina lorem            </h4>
            <p>
              <span className="font-medium">fundadora </span> de{" "}
              <span className="font-medium">Somos Nyka</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="border border-primary p-2 rounded-xl hover:bg-primary group transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button className="border border-primary p-2 rounded-xl hover:bg-primary group transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-primary group-hover:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Clientes;
