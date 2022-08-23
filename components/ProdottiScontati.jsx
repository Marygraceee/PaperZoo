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
        <div className=" w-full">
          <Slide indicators={indicators} transitionDuration={500} easing="ease-out">
           {products.map((product) => {
            console.log(product.categories)
           })}
          </Slide>
        </div>
    );
};

export default Example;
