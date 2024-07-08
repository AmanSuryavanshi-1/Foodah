import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';
import Skills from './Skills';

const Github = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const userResponse = await fetch('https://api.github.com/users/AmanSuryavanshi-1');
            const userJson = await userResponse.json();
            setUserData(userJson);
        }
        fetchData();
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mx-12 overflow-hidden shadow-lg bg-primary-dark bg-opacity-80 rounded-3xl backdrop-filter backdrop-blur-lg">
                <div className="md:flex">
                    <div className="flex items-center justify-center px-10 py-8 md:flex-shrink-0 bg-primary-yellow">
                        <a href="https://github.com/AmanSuryavanshi-1" className="relative group">
                            <img
                                src={userData?.avatar_url}
                                alt="Avatar"
                                className="w-48 h-48 transition-all duration-300 border-4 rounded-full shadow-xl border-primary-grey group-hover:border-primary-light"
                            />
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 rounded-full opacity-0 bg-primary-bgColor bg-opacity-70 group-hover:opacity-100">
                                <FaGithub className="text-2xl text-primary-yellow" />
                            </div>
                        </a>
                    </div>
                    <div className="p-6 md:p-8 lg:p-8">
                        <div className="text-sm font-semibold tracking-wide uppercase text-primary-yellow">GitHub Profile</div>
                        <h2 className="mt-2 font-serif text-4xl font-bold leading-8 tracking-tight text-primary-light">
                            Aman Suryavanshi
                        </h2>
                        <p className="mt-2 text-lg text-primary-light">
                            <span>{userData?.public_repos}</span> Repos | 
                            <span className="ml-2">{userData?.followers}</span> Followers
                        </p>
                        <p className="pl-1 mt-2 font-sans text-lg leading-7 text-primary-light">
                            {userData?.bio}
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://github.com/AmanSuryavanshi-1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-5 py-3 transition-all duration-300 border-2 shadow-sm cursor-pointer rounded-2xl shadow-primary-light border-primary-yellow text-primary-light bg-primary-bgColor hover:bg-primary-light hover:text-primary-bgColor hover:border-transparent"
                            >
                                GitHub Profile
                                <FaGithub className="ml-2 text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Skills/>

            <div className="p-8 m-12 overflow-hidden shadow-lg bg-primary-dark bg-opacity-80 rounded-3xl backdrop-filter backdrop-blur-lg sm:p-12">
                <h2 className="mb-8 font-serif text-3xl font-bold text-center text-primary-light">
                    My GitHub Calendar
                </h2>
                <div className="flex justify-center text-primary-yellow">
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
    );
}

export default Github;