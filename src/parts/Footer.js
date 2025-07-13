/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import BrandIcon from './BrandIcon';
import Button from '../elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-700 pb-6">
      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between mt-8 gap-10">

          {/* Brand */}
          <div className="w-full lg:w-1/3">
            <BrandIcon />
            <p className="mt-2 text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light">
              Growing Your Business<br />Is Our Calling
            </p>
          </div>

          {/* Office */}
          <div className="w-full lg:w-1/3">
            <h1 className="text-lg text-theme-blue dark:text-purple-400 pb-2">Office</h1>
            <p className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light break-words">
              nexaquarkconsulting@gmail.com
            </p>
            <p className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light">
              New Delhi, India
            </p>
          </div>

          {/* Social */}
          <div className="w-full lg:w-1/3">
            <h1 className="text-lg text-theme-blue dark:text-purple-400 pb-2">Social</h1>
            <div className="flex flex-col space-y-1">
              <Button
                href="https://www.instagram.com/racmathafidz/"
                type="link"
                target="_blank"
                className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light hover:underline"
                isExternal
              >
                Instagram ❌
              </Button>
              <Button
                href="https://www.linkedin.com/in/racmat-hafidz-89982a156/"
                type="link"
                target="_blank"
                className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light hover:underline"
                isExternal
              >
                LinkedIn
              </Button>
              <Button
                href="https://github.com/racmathafidz"
                type="link"
                target="_blank"
                className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light hover:underline"
                isExternal
              >
                Github ❌
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10">
          <p className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light">
            Copyright {new Date().getFullYear()} • All rights reserved •{' '}
          </p>
          <div className="text-purple-700 dark:text-purple-400 font-bold text-lg">
            NexaQuark Consulting
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-1 mt-3">
            <span className="text-base lg:text-lg text-gray-400 dark:text-gray-300 font-light">Made with ❤️ by</span>
            <div className="flex flex-wrap justify-center gap-x-2">
              <Button
                href="https://www.linkedin.com/in/shashank-sharma-b05846175/"
                type="link"
                target="_blank"
                className="text-base lg:text-lg text-purple-700 dark:text-purple-400 font-light hover:text-blue-700 dark:hover:text-blue-400 whitespace-nowrap"
                isExternal
              >
                Shashank Sharma
              </Button>
              <span className="text-base lg:text-lg text-theme-purple dark:text-purple-300 font-light">&</span>
              <Button
                href="https://www.linkedin.com/in/kashyap-rupapara/"
                type="link"
                target="_blank"
                className="text-base lg:text-lg text-purple-700 dark:text-purple-400 font-light hover:text-blue-700 dark:hover:text-blue-400 whitespace-nowrap"
                isExternal
              >
                Kashyap Rupapara
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
