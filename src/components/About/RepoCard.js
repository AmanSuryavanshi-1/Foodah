import React from 'react';

const RepoCard = ({ repo }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg">
            <h2 className="mb-2 text-xl font-semibold">{repo.name}</h2>
            <p className="mb-2 text-gray-700">{repo.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-gray-600">{repo.language}</span>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    View Repo
                </a>
            </div>
        </div>
    );
}

export default RepoCard;
