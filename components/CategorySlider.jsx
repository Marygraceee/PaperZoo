/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable quotes */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link';

const Example = ({ categories }) => {
 const indicators = (index) => (<div className="indicator" />);

    return (
        <div className=" w-full z-10 flex flex-col lg:gap-10 gap-5 p-5">
          <h1 className="text-center text-lg lg:text-2xl font-extrabold">Sfoglia le categorie!</h1>
          <Slide indicators={indicators} transitionDuration={500} easing="ease-out">
            {categories.map((category) => (
            <div key={category.slug} className="flex flex-col items-center justify-center w-1/2 mx-auto container">
                <a href={`/categorie/${category.slug}`} className="lg:text-2xl md:text-xl text-lg hover:text-orange-400 transition duration-300">{category.name}</a>
                <Link href={`/categorie/${category.slug}`}>
                <img className="cursor-pointer hover:scale-105 transition duration-300 p-5" src={category.assets[0].url} style={{ maxWidth: "40%" }} alt="" />
                </Link>

            </div>
            ))}

          </Slide>
        </div>
    );
};

export default Example;
