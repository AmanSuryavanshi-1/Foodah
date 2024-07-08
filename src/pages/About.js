import React, { useState } from 'react'
import Header from '../components/Header/Header';
import AboutMe from '../components/About/AboutMe';
import Github from '../components/About/Github';

const About = () => {
  const [showHeaderAndAbout, setShowHeaderAndAbout] = useState(true);

  const toggleHeaderAndAbout = () => {
    setShowHeaderAndAbout(!showHeaderAndAbout);
  };  

  return (
    <>
    <button 
        onClick={toggleHeaderAndAbout}
        className="fixed px-4 py-2 transition-colors duration-300 rounded-md shadow-md top-4 right-4 bg-primary-yellow text-primary-dark hover:bg-primary-light"
      >
        {showHeaderAndAbout ? 'Hide Header & About' : 'Show Header & About'}
      </button>

      {showHeaderAndAbout && (
        <>
          <Header />
          <AboutMe />
        </>
      )}
    <Github/>
    </>
  );
};

export default About;

{/* 
                            <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
                            <div className={styles.container}>
                                {repos.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </div>
                         */}
    