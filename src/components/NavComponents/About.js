import React from 'react';
import img from '../../../Assets/me main.png'; // Ensure this path is correct
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="flex items-center justify-center mx-8 mb-4 h-80vh">
      <div className="w-full max-w-6xl px-4 mx-12">
        <h5 className="mb-4 text-xs text-center text-gray-500 uppercase">Get To Know</h5>
        <h2 className="mb-8 font-serif text-3xl font-bold text-center text-primary">About Me</h2>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="relative flex items-center justify-center ">
            <div className="absolute shadow-lg shadow-primary-light w-72 h-64 bg-primary-yellow rounded-2xl transform transition duration-300 hover:rotate-[-10deg]"></div>
            <div className="w-72 h-64 overflow-hidden transform rotate-[-5deg] duration-300 bg-white shadow-lg rounded-2xl transition hover:rotate-0">
              <img src={img} alt="AboutImage" className="object-cover w-full h-full" />
            </div>
          </div>

          <div className="about_content">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <article className="p-6 text-center transition-all bg-gray-100 rounded-lg shadow-lg hover:shadow-xl">
                <FaAward className="mx-auto mb-2 text-3xl text-yellow-500" />
                <h5 className="mb-2 text-lg font-semibold">Experience</h5>
                <small className="text-xs text-gray-500">1+ Years Working</small>
              </article>

              <article className="p-6 text-center transition-all bg-gray-100 rounded-lg shadow-lg hover:shadow-xl">
                <FiUsers className="mx-auto mb-2 text-3xl text-yellow-500" />
                <h5 className="mb-2 text-lg font-semibold">Worked With</h5>
                <small className="text-xs text-gray-500">2+ Companies</small>
              </article>

              <article className="p-6 text-center transition-all bg-gray-100 rounded-lg shadow-lg hover:shadow-xl">
                <VscFolderLibrary className="mx-auto mb-2 text-3xl text-yellow-500" />
                <h5 className="mb-2 text-lg font-semibold">Projects</h5>
                <small className="text-xs text-gray-500">35+ Completed</small>
              </article>
            </div>
            <Link to="#Contact" className="inline-block px-8 py-3 mt-4 text-center text-white transition duration-300 bg-yellow-500 border rounded-lg hover:bg-yellow-600">
              Let's Talk
            </Link>
          </div>
        </div>

        <p className="my-8 text-lg leading-relaxed text-gray-600">
          Hi, I'm a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my visions to life. I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users. Whether I'm working on a website or a mobile app, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to the next project.
        </p>
      </div>
    </section>

  );
}

export default About;
