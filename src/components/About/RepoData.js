import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Skills from './Skills'

const RepoData = () => {
    const [repoData, setRepoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const responseRes = await fetch('https://api.github.com/repos/AmanSuryavanshi-1/foodah');
            const repoJson = await responseRes.json();
            setRepoData(repoJson);
        };
        fetchData();
    }, []);

    if (!repoData) {
        return null;
    }

    return (
        <div className="p-8 m-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-center text-primary-light">
                Featured Repository: Foodah
            </h2>
            <div className="text-primary-light">
                <p className="mb-2"><strong>Description:</strong> {repoData.description}</p>
                <p className="mb-2"><strong>Language:</strong> {repoData.language}</p>
                <p className="mb-2"><strong>Stars:</strong> {repoData.stargazers_count}</p>
                <p className="mb-2"><strong>Forks:</strong> {repoData.forks_count}</p>
                <p className="mb-2"><strong>Last Updated:</strong> {new Date(repoData.updated_at).toLocaleDateString()}</p>
                <a
                    href={repoData.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 mt-4 transition-all duration-300 border-2 shadow-sm cursor-pointer rounded-2xl shadow-primary-light border-primary-yellow text-primary-light bg-primary-bgColor hover:bg-primary-light hover:text-primary-bgColor hover:border-transparent"
                >
                    View Repository
                    <FaGithub className="ml-2 text-2xl" />
                </a>
            </div>
            <Skills />
        </div>
    );
};

export default RepoData;
