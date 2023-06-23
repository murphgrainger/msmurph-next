import React from 'react';

const CardWork = ({ title, description, href }) => (
  <div
    className="group rounded-lg px-6 py-6 m-2 bg-orange-100 text-orange-400"
  >
      <h2 className="mb-3 text-2xl font-semibold flex items-center">
        {title}
      </h2>
      <p className="m-0 max-w-[30ch] text-lg opacity-75 font-regular">
        {description}
      </p>
  </div>
);

export default CardWork;
