/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';
import logo from "../assets/images/logo_without_name.png";

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-theme-blue text-4xl font-medium ">

        {/* <>main_folder/racxstudio/src/assets/images/logo_without_name.png
        <span className="text-theme-blue"><i>NexaQuark Consulting</i></span> */}

      <div className="flex items-center space-x-4 group cursor-pointer">
        <img
          src={logo}
          alt="NexaQuark Logo"
          className="h-12 w-12 md:h-16 md:w-16 object-contain transition-transform duration-200 group-hover:scale-105"
        />
        
      <span className="text-purple-700 group-hover:text-blue-700 text-2xl md:text-3xl font-semibold tracking-normal transition-colors duration-200 font-sans">
        NexaQuark Consulting
      </span>

      </div>
      
      </p>
    </Button>
  );
}
