import { HiOutlineMail } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { BsSend } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ugqrpcu', 'template_iz5pcva', form.current, 'I0BXSqsH7YBt5ciXX')

    e.target.reset();
  };

  return (
       <div className="h-screen mx-8 my-2">
      <h5 className="mb-2 text-xs text-center uppercase text-primary-yellow">Get In Touch</h5>
      <h2 className="mb-8 font-serif text-3xl font-bold text-center text-primary-light">Contact Me</h2>
      <div className='grid items-center justify-center grid-cols-1 gap-2 mx-auto md:grid-cols-2'>
        
        <div className='grid grid-cols-1 gap-6 mx-auto md:grid-rows-2'>
          <article className="py-8 px-16 text-center transition-all duration-300 border-2 rounded-3xl shadow-sm shadow-primary-light bg-primary-bgColor border-primary-yellow hover:shadow-sm hover:shadow-primary-light hover:bg-primary-dark transform hover:translate-y-[-8px]">
              <div className="flex items-center justify-center">
                <HiOutlineMail className='flex justify-center mb-2 text-3xl text-center text-primary-yellow ' />
              </div>
            <h4 className='mb-2 font-sans text-lg font-semibold text-primary-white'>Email</h4>
            <h5 className='mb-2 font-sans text-sm text-primary-yellow'>adude890@gmail.com</h5>
            <Link to='mailto:amansuryavanshi2002@gmail.com' className='block text-primary-light'>
              Send a message
            </Link>
          </article>
          <article className="p-6 text-center transition-all duration-300 border-2 rounded-2xl shadow-sm shadow-primary-light bg-primary-bgColor border-primary-yellow hover:shadow-sm hover:shadow-primary-light hover:bg-primary-dark transform hover:translate-y-[-10px]">
          <div className="flex items-center justify-center">
            <BsWhatsapp className='flex justify-center mb-2 text-3xl text-center text-primary-yellow' />
            </div>
            <h4 className='mb-2 font-sans text-lg font-semibold text-primary-white'>Call Me</h4>
            <h5 className='mb-2 font-sans text-sm text-primary-yellow'>+91 8745030106</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+91874503106&text=Hello%20there!'
              className='block mt-2 text-primary-light'>
              Send a message
            </a>
          </article>
          {/* <article className="p-6 text-center transition-all duration-300 border-2 rounded-2xl shadow-sm shadow-primary-light bg-primary-bgColor border-primary-yellow hover:shadow-sm hover:shadow-primary-light hover:bg-primary-dark transform hover:translate-y-[-10px]">
          <div className="flex items-center justify-center">
            <CiLocationOn className='flex justify-center text-3xl text-center text-primary-yellow ' />
            </div>
            <h4 className='font-sans text-lg font-semibold text-primary-white'>Location</h4>
            <h5 className='font-sans text-sm text-primary-yellow'>New Delhi-India-110059</h5>
          </article> */}
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className='flex flex-col '>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
            className='w-2/3 px-4 py-3 mb-5 border-2 rounded-xl text-primary-light border-primary-yellow bg-primary-bgColor focus:outline-none focus:border-primary-light'
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email'
            required
            className='w-2/3 px-4 py-3 mb-5 border-2 rounded-xl text-primary-light border-primary-yellow bg-primary-bgColor focus:outline-none focus:border-primary-light'
          />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
            className='w-2/3 px-4 py-3 mb-4 border-2 rounded-xl text-primary-light border-primary-yellow bg-primary-bgColor focus:outline-none focus:border-primary-light'
          ></textarea>
          <button
            type='submit'
            className="flex justify-center px-5 py-3 mr-auto transition-all duration-300 border-2 shadow-sm cursor-pointer rounded-2xl shadow-primary-light bg-primary-yellow text-primary-bgColor border-primary-white hover:bg-primary-light hover:text-primary-bgColor hover:border-transparent">
            Send Message
              
              <BsSend className='ml-2 text-2xl text-primary-bgColor'/>
          </button>
        </form>
      </div>
      </div>
  );
};

export default Contact;
