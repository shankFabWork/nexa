/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import Button from '../elements/Button';
import logo from "../assets/images/logo_without_name.png";

export default function BrandIcon() {
  return (
    <Button className="block m-0 p-0" type="link" href="/">
      <div className="flex items-center space-x-2 group cursor-pointer">
        <img
          src={logo}
          alt="NexaQuark Logo"
          className="h-16 w-16 object-contain transition-transform duration-200 group-hover:scale-105"
        />
        <span className="text-purple-700 group-hover:text-blue-700 text-lg md:text-4xl font-semibold tracking-tight font-sans">
          &nbsp;&nbsp;&nbsp; NexaQuark Consulting
        </span>
      </div>
    </Button>
  );
}
