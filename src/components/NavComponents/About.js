import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import AboutMe from './AboutMe';
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
    {/* <div className="p-6 text-primary-white bg-primary-bgColor">
      <h1 className="mb-8 text-4xl font-bold text-center text-primary-yellow">About Me</h1>

            <div className="flex items-center justify-center">
        <a
            href="https://github.com/AmanSuryavanshi-1"
            className="flex items-center mb-6 transition-transform duration-300 transform hover:scale-105"
        >
            <img
            src={userData?.avatar_url}
            alt="Avatar"
            className="mr-6 border-4 rounded-full shadow-lg w-28 h-28 border-primary-yellow"
            />

            <div className="text-center">
            <h2 className="text-2xl font-bold">Aman Suryavanshi</h2>
            <h3 className="mt-2 text-lg">
                {userData?.public_repos} repos{' '}
                <span className="text-primary-yellow">| {userData?.followers} followers</span>
            </h3>
            <p className="max-w-sm">{userData?.bio}</p>

            </div>

        </a>
        </div>


      <div className="flex items-center justify-center mb-8">
        <a
          href="https://github.com/AmanSuryavanshi-1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-5 py-3 transition-all duration-300 bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:bg-gray-700 hover:border-gray-600"
        >
          <p className="mr-2 font-medium">View my GitHub profile</p>
          <FaGithub className="text-lg text-primary-yellow" />
        </a>
      </div>

      <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="mb-6 text-2xl font-bold text-center text-primary-yellow">My GitHub Calendar</h2>
        <div className="flex justify-center text-white">
          <GitHubCalendar
            username="AmanSuryavanshi-1"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            className="calendar"
          />
        </div>
      </div>
    </div> */}
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
    