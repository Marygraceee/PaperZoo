/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';
import { BsPlusLg } from 'react-icons/bs';
import { HiOutlineMinusSm } from "react-icons/hi";

export default function CategoryList({ categories }) {
  const [extended, setExtended] = useState({});

  const handleClick = (index) => () => {
    setExtended((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };

  if (!categories) return null;

  return (

    <ul className="flex flex-col lg:flex-col lg:rounded-lg  w-full gap-2 ">
      {categories.map((category, index) => (
        <>
          <li className="flex flex-row items-center gap-2 " key={category.slug}>

            <Link href={`categories/${category.slug}`}>
              <p className="hover:scale-105 text-gray-800 w-fit hover:text-yellow-400 transition text-xl lg:text-2xl cursor-pointer">{category.name}</p>
            </Link>

            <div className={`hover:text-yellow-400 transition cursor-pointer ${!extended[index] ? "" : "text-yellow-700 font-extrabold"} `}>
              { !extended[index]
                ? <BsPlusLg onClick={handleClick(index)} />
                : <HiOutlineMinusSm onClick={handleClick(index)} /> }
            </div>

          </li>

          <ul className={`pl-5 ${!extended[index] ? "hidden" : ""}`}>
            {category.children.map((subcategory) => (
              <li key={subcategory.slug}>
                <Link href={`categories/${subcategory.slug}`}>
                  <p className="hover:scale-105 w-fit text-gray-800 hover:text-yellow-400
                  transition text-lg lg:text-xl cursor-pointer"
                  >
                    {subcategory.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>

        </>
      ))}

    </ul>

  );
}
