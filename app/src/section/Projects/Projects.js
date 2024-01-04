import React from 'react';
import Link from 'next/link'

const ProjectCard = ({ project }) => {
  return (
    <div className="col-span-12 md:col-span-6 w-full max-w-full rounded overflow-hidden shadow-lg bg-gray-900">
      <div className="px-6 py-4">
        <div className="font-medium text-lg mb-2">{project.name}</div>
        <p className="text-gray-400 text-base md:text-justify">{project.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.tech.map((tech, index) => (
          <span key={index} className="inline-block bg-gray-200 hover:bg-gray-500 transition-colors duration-200 hover:text-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">{tech}</span>
        ))}
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between">
        { project.github_link && 
          <Link href={project.github_link} className="text-blue-500" target="_blank" rel="noopener noreferrer">GitHub</Link>
        }
        { project.live_link &&
          <Link href={project.live_link} className="text-blue-500" target="_blank" rel="noopener noreferrer">Live Demo</Link>
        }
      </div>
    </div>
  );
};

const ProjectList = ( {n_display = null} ) => {
  const projects = [
    {
        "name": "Hyperpersonalisation Backend",
        "description": "A banking backend made using Django and Django REST Framework for building a hypersonalised middleware that can be integrated with existing banking app at IIT Delhi.",
        "github_link": "https://github.com/sib-hackathon/hyperpersonalisation-backend",
        "live_link": "",
        "tech": ["Django", "Django REST Framework"]
    },
    {
        "name": "Code-2-Doc",
        "description": "A micro SaaS product that transforms code from your GitHub repository into a LaTeX template built using GitHub API & Tailwind CSS.",
        "github_link": "https://github.com/abdulhakkeempa/github-to-latex",
        "live_link": "https://abdulhakkeempa.github.io/github-to-latex/",
        "tech": ["GitHub API", "Tailwind CSS"]
    },
    {
        "name": "Movie Recommender",
        "description": "A Django-based movie recommendation system built with Item-Item Collaborative Filtering and Content-Based Filtering with UI inspiration from Amazon Prime Video.",
        "github_link": "https://github.com/abdulhakkeempa/movie-recommender/",
        "live_link": "",
        "tech": ["Django", "Kaggle", "Recommendation Systems", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
        "name": "College CMS",
        "description": "A Content Management System for colleges built with Laravel, PHP, MySQL, and JavaScript. It features an admin dashboard for content management and multiple user roles  controlled access.",
        "github_link": "https://github.com/abdulhakkeempa/college-cms",
        "live_link": "",
        "tech": ["Laravel", "PHP", "MySQL", "JavaScript", "Nginx", "Bootstrap"]
    },
    {
        "name": "Listen Bot",
        "description": "A Telegram bot that will download and convert YouTube videos into MP3 files by taking the provided YouTube link as input.",
        "github_link": "https://github.com/abdulhakkeempa/listen-bot",
        "live_link": "",
        "tech": ["Telegram Bot", "YouTube API", "Python"]
    },
    {
        "name": "Theyyam Classifier API",
        "description": "A Django REST API integrated with a TensorFlow image classification model. Built using Django Rest Framework, and deployed on an Azure VM using Nginx for a research project.",
        "github_link": "https://github.com/abdulhakkeempa/theyyam-classifier-api",
        "live_link": "",
        "tech": ["Django", "Django Rest Framework", "TensorFlow", "Azure VM", "Nginx"]
    },
    {
        "name": "Spam Classifier",
        "description": "SMS Spam Classifier with FastAPI 🚀",
        "github_link": "https://github.com/abdulhakkeempa/spam-detection",
        "live_link": "",
        "tech": ["FastAPI", "Scikit-Learn", "Pandas"]
    }
  ]


  // Reverse the order of the projects
  const reversedProjects = [...projects]

  // If n_display is not null, slice the array to get the first n_display projects
  const displayedProjects = n_display !== null ? reversedProjects.slice(0, n_display) : reversedProjects;


  return (
    <div className='mx-auto max-w-screen-xl lg:px-30 p-10 md:pr-20 md:pl-20 pb-5 pt-5'>
      <div className="grid grid-cols-12 gap-2 ">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <div className="pt-6 pb-2">
        {n_display && 
          <Link href="/projects" className="text-blue-500 hover:underline hover:underline-offset-4 text-md font-semibold transition-colors duration-200">
            See more &#8594;
          </Link>        
        }
      </div>
    </div>
  );
};

export default ProjectList;
