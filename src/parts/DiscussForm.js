/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../elements/Button';
import { Form } from '../elements/Form';

export default function DiscussPage(actions) {
  const navigate = useNavigate();
  const { data, resetForm, onChange } = actions;

  const submitEmail = () => {
    const { 
      name, company, email, phone, projectIdea,
    } = data;
    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (name && company && email && phone && projectIdea) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      ).then(() => {
        toast.success("Success! we\u2019ll get back to you soon. Thank you!");
        resetForm();
      }, (error) => {
        toast.error(error);
      });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <Zoom triggerOnce>
      <section className="relative flex flex-col container mx-auto justify-center min-h-screen px-4">
        {/* X Button Top Right */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="absolute top-5 right-5 text-red-600 hover:text-red-800 text-4xl font-bold transition duration-300 z-50"
          aria-label="Go to home"
        >
          &times;
        </button>

        {/* Call-to-Action Section */}
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col w-full sm:w-11/12 xl:w-10/12 mx-auto rounded-2xl bg-theme-purple text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl mb-12">
            <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:items-center">
              <h1 className="w-full sm:w-2/3 text-5xl sm:text-6xl leading-tight font-semibold">
                Have an awesome project in mind?
              </h1>
              <Fade direction="up" triggerOnce delay={300}>
                <Button
                  href="#form"
                  type="link"
                  className="flex bg-white bg-yellow-300 text-blue-800 text-xl lg:text-2xl xl:text-xl tracking-wider items-center justify-center w-56 lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2 border-dark-theme-purple shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105"
                >
                  Let&apos;s Discuss!
                </Button>
              </Fade>
            </div>
            <Fade delay={300} triggerOnce>
              <p className="font-light p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl mb-1">
                Let&apos;s discuss it and make your dream software come true!
              </p>
            </Fade>
          </div>
        </Fade>

        {/* Form Section */}
        <Slide direction="up" triggerOnce>
          <div id="form" className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto">
            <Fade direction="down" triggerOnce>
              <h2 className="text-4xl sm:text-5xl text-theme-blue text-center font-bold mb-4">
                Let&apos;s Discuss
              </h2>
            </Fade>

            <Fade direction="up" triggerOnce>
              <p className="font-light text-lg text-gray-500 text-center mb-10">
                Please fill out the form below to discuss your project and we&apos;ll get back to you in less than 24 hours.
              </p>
            </Fade>

            <Fade cascade direction="up" triggerOnce damping={0.2}>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Form id="name" name="name" type="text" value={data.name} placeholder="Your name" onChange={onChange} />
                  <Form id="company" name="company" type="text" value={data.company} placeholder="Your company" onChange={onChange} />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Form id="email" name="email" type="email" value={data.email} placeholder="Your email address" onChange={onChange} />
                  <Form id="phone" name="phone" type="number" value={data.phone} placeholder="Your contact number" onChange={onChange} />
                </div>
                <Form id="projectIdea" name="projectIdea" type="textarea" value={data.projectIdea} placeholder="Explain your project idea" onChange={onChange} />
                <div className="text-center">
                  <Button
                    className="text-xl px-12 py-3 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
                    type="button"
                    onClick={submitEmail}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </Fade>
          </div>
        </Slide>

        <ToastContainer />
      </section>
    </Zoom>
  );
}
