/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai"

export default function CategoryListCards({ categories }) {
  const [extended, setExtended] = useState({});

  const handleClick = (index) => () => {
    setExtended((state) => ({
      ...state, // <-- copy previous state
      [index]: !state[index], // <-- update value by index key
    }));
  };
  return (
     <ul className="grid lg:grid-cols-3 gap-6 lg:rounded-lg w-full ">
          {categories.map((category, index) => (
            <div key={category.slug} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">

              <div className="bg-lime-400 hover:bg-lime-300 h-2/3 container flex flex-row justify-center items-center p-10 cursor-pointer">
                <Link href={`categorie/${category.slug}`}>
                  <img
                    style={{
                      minWidth: "5rem",
                      minHeight: "5rem",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      aspectRatio: "1/1",
                    }}
                    src={category.assets[0].url}
                    alt=""
                  />
                </Link>

              </div>

              <li className="flex flex-row items-center justify-center gap-2 p-2" key={category.slug}>

                <Link href={`categorie/${category.slug}`}>
                  <p className=" text-xl lg:text-2xl font-bold tracking-tight text-gray-900 hover:text-lime-400 transition cursor-pointer hover:scale-105">{category.name}</p>
                </Link>

                <div className={`hover:text-lime-400 transition cursor-pointer ${!extended[index] ? '' : 'text-lime-700 font-extrabold'} `}>
                  { !extended[index]
                    ? <AiOutlineArrowRight onClick={handleClick(index)} />
                    : <AiOutlineArrowDown onClick={handleClick(index)} /> }
                </div>

              </li>

              <ul className={`${!extended[index] ? 'opacity-0' : ''} flex flex-col items-center transition`}>
                {category.children.map((subcategory) => (
                  <li key={subcategory.slug}>
                    <Link href={`categorie/${subcategory.slug}`}>
                      <p className="text-gray-700 hover:text-lime-400 hover:scale-105 cursor-pointer transition lg:text-xl text-lg">
                        {subcategory.name}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </ul>

  );
}
