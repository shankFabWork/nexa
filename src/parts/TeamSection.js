/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Team from 'assets/images/hero/team.png';

export default function TeamSection({ data }) {
  return (
    <section>
      {/* Header Section */}
      <div className="hero sm:items-center lg:items-start sm:flex-row flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
          <Fade direction="up" triggerOnce>
            <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
              Our Team
            </h1>
          </Fade>
          <Fade direction="up" delay={500} triggerOnce>
            <p className="font-light text-xl text-gray-400 leading-relaxed">
              Our team is full of passionate people and ready to make your dream software come true.
            </p>
          </Fade>
        </div>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <Fade direction="top-right" triggerOnce delay={300}>
            <img src={Team} alt="Team Hero" />
          </Fade>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="container mx-0 sm:mx-auto my-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 mx-16 justify-items-center">
          
          {data.map((item, index) => (
            <Fade bottom triggerOnce delay={200 * index} key={item.name}>
              <div>
                <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-purple justify-center transform transition duration-500 hover:scale-105">
                  <div className="flex justify-center xl:mb-5">
                    <img src={item.imageUrl} alt={item.name} className="flex w-32 h-32 rounded-full" />
                  </div>
                  <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                  <p className="font-light text-gray-400 text-center mb-3">{item.position}</p>
                </div>
              </div>
            </Fade>
          ))}

        </div>
      </div>
    </section>
  );
}
