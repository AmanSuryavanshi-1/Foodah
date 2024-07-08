import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa';
import { DiReact, DiJavascript1, DiNpm } from 'react-icons/di';
import { SiWebpack, SiReactrouter, SiEmailjs } from 'react-icons/si';
import { RiTailwindCssFill } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import { SiPostcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsFiletypeJson } from "react-icons/bs";

const Skills = () => {
    const [repoData, setRepoData] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            const responseRes = await fetch('https://api.github.com/repos/AmanSuryavanshi-1/foodah');
            const repoJson = await responseRes.json();
            setRepoData(repoJson);
        }
        fetchData();
    },[])

    const skills = [
        { name: 'React', icon: DiReact },
        { name: 'JavaScript', icon: DiJavascript1 },
        { name: 'PostCSS', icon: SiPostcss },
        { name: 'NPM', icon: DiNpm },
        { name: 'HTML', icon: AiOutlineHtml5 },
        // { name: 'HTML', icon: AiOutlineHtml5 }, github
        // { name: 'HTML', icon: AiOutlineHtml5 }, jest
        // { name: 'HTML', icon: AiOutlineHtml5 }, notion vscode etc
        { name: 'JSON', icon: BsFiletypeJson },
        { name: 'Vercel', icon: SiVercel },
        { name: 'Parcel', icon: SiWebpack },
        { name: 'React Router', icon: SiReactrouter },
        { name: 'EmailJS', icon: MdOutlineAttachEmail},
        { name: 'Tailwind CSS', icon: RiTailwindCssFill },
        { name: 'React Icons', icon: DiReact },
    ];

  return (
    <>
    {repoData && (
        <div className="p-8 m-12 overflow-hidden shadow-lg bg-primary-dark bg-opacity-80 rounded-3xl backdrop-filter backdrop-blur-lg">
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
        <div className="p-8 m-12 overflow-hidden">
        <h2 className="mb-8 font-serif text-3xl font-bold text-center text-primary-light">
        Technologies & Tools
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
            {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 transition-all duration-300 transform rounded-lg shadow-md bg-primary-bgColor hover:scale-105 hover:shadow-lg">
                    <skill.icon className="text-5xl text-primary-yellow animate-bounce" />
                    <span className="mt-2 text-sm font-semibold text-primary-light">{skill.name}</span>
                </div>
            ))}
        </div>
    </div>
        </div>
    )}
    </>
  )
}

export default Skills