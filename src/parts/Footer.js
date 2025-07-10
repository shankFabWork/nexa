/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Growing Your Business
              {' '}
              <br />
              Is Our Calling
            </p>
          </div>
          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Office
            </h1>
            <p className="text-lg text-gray-400 font-light">
              nexaquarkconsulting@gmail.com
            </p>
            <p className="text-lg text-gray-400 font-light">
              New Delhi, India
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <Button href="https://www.instagram.com/racmathafidz/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Instagram ❌
            </Button>
            <Button href="https://www.linkedin.com/in/racmat-hafidz-89982a156/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              LinkedIn ❌
            </Button>
            <Button href="https://github.com/racmathafidz" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
              Github ❌
            </Button>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2021 - All rights reserved - 
            <a href="/" className="text-lg text-blue-400 font-light"> NexaQuark Consulting </a>
          </p>
          <div className="flex-row">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by&nbsp;
            </p>
            <br />
            <hr />
            
            <Button
              href="https://www.linkedin.com/in/shashank-sharma-b05846175/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_jobs%3BAaED7MtfTzexCzBOSS4s4w%3D%3D"
              type="link"
              target="_blank"
              className="text-lg text-purple-700 font-light hover:text-blue-700 transition-colors duration-200"
              isExternal
            >
              Shashank Sharma
            </Button>
           <div className="text-lg text-theme-purple font-light"> & </div>
           
            <Button
              href="https://www.linkedin.com/in/kashyap-rupapara/"
              type="link"
              target="_blank"
              className="text-lg text-purple-700 font-light hover:text-blue-700 transition-colors duration-200"
              isExternal
            >
              Kashyap Rupapara
            </Button>
            <hr />

          </div>
        </div>
      </div>
    </div>
  );
}
