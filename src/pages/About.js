import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import AboutMe from '../components/About/AboutMe';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const githubData = async () => {
      const fetchedData = await fetch('https://api.github.com/users/AmanSuryavanshi-1');
      const JsonData = await fetchedData.json();
      console.log(JsonData);
      setUserData(JsonData);
    }
    githubData();
  }, [])

  return (
    <>
    <Header/>
    <AboutMe/>
    <div className="p-10 bg-primary-bgColor text-primary-white">
  <h1 className="mb-12 text-4xl font-bold text-center text-primary-yellow">
    About Me
  </h1>

  <div className="mx-auto max-w-7xl">
    <div className="overflow-hidden shadow-2xl bg-primary-dark bg-opacity-80 rounded-3xl backdrop-filter backdrop-blur-lg">
      <div className="md:flex">
        <div className="flex items-center justify-center p-8 bg-opacity-50 md:flex-shrink-0 bg-primary-grey">
          <a href="https://github.com/AmanSuryavanshi-1" className="relative group">
            <img 
              src={userData?.avatar_url} 
              alt="Avatar" 
              className="w-48 h-48 transition-all duration-300 border-4 rounded-full shadow-xl border-primary-yellow group-hover:border-primary-light"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-full opacity-0 bg-primary-bgColor bg-opacity-70 group-hover:opacity-100">
              <FaGithub className="text-5xl text-primary-yellow" />
            </div>
          </a>
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <div className="text-sm font-semibold tracking-wide uppercase text-primary-yellow">GitHub Profile</div>
          <h2 className="mt-2 font-serif text-4xl font-bold leading-8 tracking-tight text-primary-light">
            Aman Suryavanshi
          </h2>
          <p className="mt-4 text-xl text-primary-light">
            <span className="font-semibold">{userData?.public_repos}</span> Repos | 
            <span className="ml-2 font-semibold">{userData?.followers}</span> Followers
          </p>
          <p className="mt-6 font-sans text-xl leading-7 text-primary-light">
            {userData?.bio}
          </p>
          <div className="mt-8">
            <a 
              href="https://github.com/AmanSuryavanshi-1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-6 py-3 text-lg font-medium transition-all duration-300 border border-transparent rounded-full shadow-sm text-primary-bgColor bg-primary-yellow hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-yellow"
            >
              View GitHub Profile
              <FaGithub className="ml-2 text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>

{/* <FaGithub className="text-lg text-primary-yellow" /> */}

    <div className="p-8 mt-16 overflow-hidden shadow-2xl bg-primary-dark bg-opacity-80 rounded-3xl backdrop-filter backdrop-blur-lg sm:p-12">
      <h2 className="mb-8 font-serif text-3xl font-bold text-center text-primary-yellow">
        My GitHub Calendar
      </h2>
      <div className="flex justify-center">
        <GitHubCalendar
          username="AmanSuryavanshi-1"
          blockSize={12}
          blockMargin={5}
          fontSize={16}
          color="#FDDA24"
          className="calendar"
        />
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default About;


// <div className="flex flex-col items-center">
//       <h2 className="font-mono text-lg">{userData?.login}</h2>
//       <div className="flex items-center mt-2 space-x-4">
//         <span className="font-mono">{userData?.public_repos} repos</span>
//         <span className="font-mono">{userData?.followers} followers</span>

//       </div>
//     </div>
//     <p className="max-w-xs">{userData?.bio}</p>

//   </div>
// </div>

{/* 
                            <div> <center><h3>My Most Popular Repositories on Github</h3></center></div>
                            <div className={styles.container}>
                                {repos.map((repo) => (
                                <RepoCard key={repo.id} repo={repo} />
                                ))}
                            </div>
                         */}
                         {/* <p className="mb-4 text-gray-300">
            I am passionate about creating delightful user experiences and building scalable applications.
            This project showcases my skills in integrating with real-time data sources like Swiggy's live API.
          </p> */}
    