/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Fade, Slide, Zoom, Bounce,
} from 'react-awesome-reveal';
import * as emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Button from '../elements/Button';
import { Form } from '../elements/Form';

export default function DiscussProjectPage() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectIdea: '',
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      company: '',
      email: '',
      phone: '',
      projectIdea: '',
    });
  };

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
        toast.success("Success! we’ll get back to you soon. Thank you!");
        resetForm();
      }, (error) => {
        toast.error(error);
      });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <>
      <Header />
      <Zoom triggerOnce>
        <section className="relative flex flex-col container mx-auto justify-center min-h-screen px-4">
          <Slide direction="up" triggerOnce>
            <div
              id="form"
              className="relative bg-white p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto"
            >
              {/* Cross inside form */}
              <button
                type="button"
                onClick={() => navigate('/')}
                className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-5xl font-extrabold transition duration-300"
                aria-label="Go to home"
              >
                &times;
              </button>

              {/* <br /><br /><br /><br /> */}

              <Fade direction="down" triggerOnce>
                <h2 className="text-3xl sm:text-4xl text-theme-blue text-center font-bold mb-4">
                  Let&apos;s Discuss
                </h2>
              </Fade>

              <Bounce triggerOnce>
                <p className="font-light text-md text-gray-500 text-center mb-10">
                  Please fill out the form below to discuss your project and we&apos;ll get back to you in less than 24 hours.
                </p>
              </Bounce>

              <Fade cascade direction="up" triggerOnce damping={0.2}>
                <div className="space-y-6">
                  <Slide direction="left" triggerOnce>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Form id="name" name="name" type="text" value={data.name} placeholder="Your name" onChange={onChange} />
                      <Form id="company" name="company" type="text" value={data.company} placeholder="Your company" onChange={onChange} />
                    </div>
                  </Slide>

                  <Slide direction="right" triggerOnce>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Form id="email" name="email" type="email" value={data.email} placeholder="Your email address" onChange={onChange} />
                      <Form id="phone" name="phone" type="number" value={data.phone} placeholder="Your contact number" onChange={onChange} />
                    </div>
                  </Slide>

                  <Fade triggerOnce>
                    <Form id="projectIdea" name="projectIdea" type="textarea" value={data.projectIdea} placeholder="Explain your project idea" onChange={onChange} />
                  </Fade>

                  <div className="text-center">
                    <Button
                      className="text-lg px-10 py-3 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200"
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
      <Footer />
    </>
  );
}
