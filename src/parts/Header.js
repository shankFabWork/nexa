/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

const HEADER_HEIGHT = "py-1"; // 🔧 Change this to py-1, py-3 to control height

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname + location.hash;
  const navigate = useNavigate();

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-sm ${HEADER_HEIGHT}`}>
      <div className={`flex justify-between items-center px-0 lg:px-0 py-2 w-full max-w-screen-xl mx-auto ${HEADER_HEIGHT}`}>
   <BrandIcon />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center text-theme-blue text-sm tracking-wide space-x-4 m-0 p-0">
          <li>
            <Button
              className={`${path === '/' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
              type="link"
              href="/"
              onClick={() => {
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </Button>
          </li>
          <li>
            <Button
              className={`${path === '/#services' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
              type="link"
              href="/#services"
            >
              Services
            </Button>
          </li>
          <li>
            <Button
              className={`${path === '/#partner' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline scroll-mt-20`}
              type="link"
              href="/#partner"
            >
              Partner
            </Button>
          </li>

          <li>
            <Button
              className={`${path === '/#team' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
              type="link"
              href="/#team"
            >
              Team
            </Button>
          </li>

          <li>
            <Button
              className={`${path === '/project' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
              type="link"
              href="/project"
            >
              Project
            </Button>
          </li>
          <li>
            <Button
              className="font-medium px-4 py-1 bg-theme-purple text-white rounded-full border border-theme-purple hover:bg-dark-theme-purple transition duration-200"
              type="link"
              href="/discuss-project"
            >
              Discuss
            </Button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isCollapse}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="lg:hidden bg-white w-full border-t border-gray-200 absolute z-50">
          <ul className="flex flex-col text-theme-blue text-sm px-4 py-2 space-y-2">
            <li>
              <Button
                className={`${path === '/' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
                type="link"
                href="/"
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                className={`${path === '/#services' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
                type="link"
                href="/#services"
              >
                Services
              </Button>
            </li>
            <li>
              <Button
                className={`${path === '/team' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
                type="link"
                href="/team"
              >
                Team
              </Button>
            </li>
            <li>
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-3 py-1 hover:underline`}
                type="link"
                href="/project"
              >
                Project
              </Button>
            </li>
            <li className="text-center">
              <Button
                className="font-semibold px-4 py-1 bg-theme-purple text-white rounded-full border border-theme-purple hover:bg-dark-theme-purple transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Discuss
              </Button>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
}
