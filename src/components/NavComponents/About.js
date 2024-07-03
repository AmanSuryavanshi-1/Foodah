import React from 'react';
import img from '../../../Assets/me main.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='About' className="py-16">
      <div className="container px-4 mx-auto">
        <h5 className="mb-4 text-center text-gray-400">Get To Know</h5>
        <h2 className="mb-12 text-4xl font-bold text-center text-primary">About Me</h2>

        <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg about_me md:aspect-w-13 md:aspect-h-10">
            <img src={img} alt="AboutImage" className="w-full h-full object-cover transform rotate-[-10deg] hover:rotate-0 transition duration-300" />
          </div>

          <div className="about_content">
            <div className='grid grid-cols-3 gap-6'>
              <article className='p-6 text-center transition-all bg-white rounded-lg shadow-lg about_card hover:shadow-xl'>
                <FaAward className="mx-auto mb-2 text-3xl about_icon text-primary" />
                <h5 className="mb-2 text-lg font-semibold">Experience</h5>
                <small className="text-xs text-gray-500">1+ Years Working</small>
              </article>

              <article className='p-6 text-center transition-all bg-white rounded-lg shadow-lg about_card hover:shadow-xl'>
                <FiUsers className="mx-auto mb-2 text-3xl about_icon text-primary" />
                <h5 className="mb-2 text-lg font-semibold">Worked With</h5>
                <small className="text-xs text-gray-500">2+ Companies</small>
              </article>

              <article className='p-6 text-center transition-all bg-white rounded-lg shadow-lg about_card hover:shadow-xl'>
                <VscFolderLibrary className="mx-auto mb-2 text-3xl about_icon text-primary" />
                <h5 className="mb-2 text-lg font-semibold">Projects</h5>
                <small className="text-xs text-gray-500">35+ Completed</small>
              </article>
            </div>

            <p className="my-8 text-lg leading-relaxed text-gray-400">
              Hi, I'm a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to bring my visions to life. I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users. Whether I'm working on a website or a mobile app, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to the next project.
            </p>

            <a href="#Contact" className='inline-block px-8 py-3 text-center transition duration-300 border rounded-lg btn btn-primary border-primary hover:bg-primary hover:text-white'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
