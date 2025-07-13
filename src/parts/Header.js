/* eslint-disable react/button-has-type */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import Button from '../elements/Button';
import BrandIcon from './BrandIcon';
import DarkModeToggle from './DarkModeToggle';

const HEADER_HEIGHT = 'py-1';

// Define padding and width as reusable layout variables
// const horizontalPadding = 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-20';
// const maxWidthWrapper = 'max-w-screen-xl mx-auto';

const horizontalPadding = 'px-2';
const maxWidthWrapper = 'max-w-full';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const sectionIds = ['hero', 'services', 'partner', 'team', 'advantage', 'discuss'];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setCurrentSection(id);
            }
          },
          { threshold: 0.4 }, 
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white dark:bg-black shadow-sm ${HEADER_HEIGHT}`}>
      <div className={`flex justify-between items-center ${horizontalPadding} ${maxWidthWrapper} py-2 w-full ${HEADER_HEIGHT}`}>
        <BrandIcon />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center text-base lg:text-md tracking-wide space-x-6 m-0 p-0">
          {[
            { id: 'hero', label: 'Home', path: '/#hero' },
            { id: 'services', label: 'Services', path: '/#services' },
            { id: 'advantage', label: 'Why Us', path: '/#advantage' },
            { id: 'partner', label: 'Partner', path: '/#partner' },
            { id: 'team', label: 'Team', path: '/#team' },
          ].map(({ id, label, path }) => (
            <li key={id}>
              <Button
                className={`${
                  currentSection === id ? 'text-purple-700 font-semibold underline' : 'text-theme-blue'
                } font-medium px-3 py-1 hover:underline`}
                type="link"
                href={path}
                onClick={() => {
                  navigate(path);
                  if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {label}
              </Button>
            </li>
          ))}

          <li>
            <Button
              className={`${
                currentSection === 'discuss' ? 'text-purple-700 font-semibold underline' : 'text-theme-blue'
              } font-medium px-4 py-1 bg-theme-purple text-white rounded-full border border-theme-purple hover:bg-dark-theme-purple transition duration-200 hover:underline`}
              type="link"
              href="/#discuss"
            >
              Discuss
            </Button>
          </li>

          <li>
            <DarkModeToggle />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="block text-theme-blue lg:hidden focus:outline-none"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              className={`${isCollapse ? 'hidden' : 'block'}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              className={`${!isCollapse ? 'hidden' : 'block'}`}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
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
        <div className={`lg:hidden bg-white dark:bg-black w-full border-t border-gray-200 absolute z-50 ${horizontalPadding}`}>
          <ul className="flex flex-col text-theme-blue text-base py-2 space-y-2">
            {[
              { id: 'hero', label: 'Home', path: '/#hero' },
              { id: 'services', label: 'Services', path: '/#services' },
              { id: 'advantage', label: 'Why Us', path: '/#advantage' },
              { id: 'partner', label: 'Partner', path: '/#partner' },
              { id: 'team', label: 'Team', path: '/#team' },
            ].map(({ id, label, path }) => (
              <li key={id}>
                <Button
                  className={`${
                    currentSection === id ? 'text-purple-700 font-semibold underline' : 'text-theme-blue'
                  } font-medium px-3 py-1 hover:underline`}
                  type="link"
                  href={path}
                  onClick={() => {
                    navigate(path);
                    if (id === 'hero') window.scrollTo({ top: 0, behavior: 'smooth' });
                    setIsCollapse(false);
                  }}
                >
                  {label}
                </Button>
              </li>
            ))}

            <li className="text-center">
              <Button
                className={`${
                  currentSection === 'discuss' ? 'text-purple-700 font-semibold underline' : 'text-white'
                } font-semibold px-4 py-1 bg-theme-purple rounded-full border border-theme-purple hover:bg-dark-theme-purple transition duration-200`}
                type="link"
                href="/#discuss"
                onClick={() => {
                  navigate('/#discuss');
                  setIsCollapse(false);
                }}
              >
                Discuss
              </Button>
            </li>

            <li className="flex justify-center pt-2">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </Transition>

    </header>
  );
}
