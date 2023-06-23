import React from 'react';
import IconArrow from './IconArrow';
import Link from 'next/link';

const CardHomepage = ({ title, description, href }) => (
  <Link
    href={href}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors duration-200 ease-in-out hover:bg-orange-100 hover:border-red-600 hover:text-red-600"
  >
      <h2 className="mb-3 text-2xl font-semibold flex items-center">
        {title}
        <IconArrow
          className="ml-2 h-6 w-6 transition-transform duration-200 ease-in-out group-hover:translate-x-2 motion-reduce:transform-none"
        />
      </h2>
      <p className="m-0 max-w-[30ch] text-lg opacity-75 font-regular">
        {description}
      </p>
  </Link>
);

export default CardHomepage;
