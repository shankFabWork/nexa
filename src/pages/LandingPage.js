/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Services, Portfolios, Advantages, Partners, TeamMembers,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import BrandPartners from 'parts/Partner';
import TeamSection  from 'parts/TeamSection';
// import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
    
      <Header />

        <section id="hero">
          <Hero />
        </section>

        <section id="services">
          <Service data={Services} />
        </section>

        <section id="partner">
          <BrandPartners data={Partners} />
        </section>
        
        <section id="portfolio">
          <Portfolio data={Portfolios} />
        </section>

        <section id="team">
          <TeamSection data={TeamMembers} />
        </section>

        <section id="advantage">
          <Advantage data={Advantages} />
        </section>

        {/* <section id="testimonials">
          <Testimonial data={Testimonials} />
        </section> */}

        <section id="contact">
          <Discuss />
        </section>

        <Footer />

    </>
  );
}
