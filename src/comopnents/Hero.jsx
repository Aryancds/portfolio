import React, { useState, useEffect } from 'react';

const ProjectCard = ({ projectName, title, image }) => {
    return (
        <div className=" rounded overflow-hidden shadow-lg m-4">
            <div className="w-full h-40 bg-cover" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}></div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{projectName}</div>
                <p className="text-gray-700 text-base">{title}</p>
            </div>
        </div>
    );
};

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovered, setHovered] = useState(false);

    const projects = [
        { projectName: 'Project 1', title: 'Project Title 1', image: 'https://www.herzing.edu/sites/default/files/2020-09/it_computer_programming.jpg' },
        { projectName: 'Project 2', title: 'Project Title 2', image: 'https://cs.ucsb.edu/sites/default/files/2021-06/source-4280758_1920.jpg' },
        { projectName: 'Project 3', title: 'Project Title 3', image: 'https://www.onlc.com/blog/wp-content/uploads/2017/07/ONLC-2017-4.png' },
        { projectName: 'Project 4', title: 'Project Title 4', image: 'https://media.istockphoto.com/id/1312850689/vector/matrix-background-binary-code-texture-falling-green-numbers-data-visualization-concept.jpg?s=612x612&w=0&k=20&c=l1xAzPJUjbROnui5McM-_vbDswAg5OoSzwJuFpdj3WE=' },
        { projectName: 'Project 5', title: 'Project Title 5', image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?cs=srgb&dl=pexels-neo-2653362.jpg&fm=jpg' },
        { projectName: 'Project 6', title: 'Project Title 6', image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?cs=srgb&dl=pexels-neo-2653362.jpg&fm=jpg' },
        { projectName: 'Project 7', title: 'Project Title 7', image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?cs=srgb&dl=pexels-neo-2653362.jpg&fm=jpg' },
        { projectName: 'Project 8', title: 'Project Title 8', image: 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?cs=srgb&dl=pexels-neo-2653362.jpg&fm=jpg' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hovered) {
                setCurrentIndex(prevIndex =>
                    prevIndex === projects.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [hovered, projects.length]);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className='min-h-screen py-8 font-mono relative overflow-hidden'>
            <div className='flex justify-center items-center'>
                <div className="p-4 mt-10 rounded-lg bg-slate-300 hover:bg-cyan-600 transition duration-300">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Aryan Patel</h1>
                        <p className="text-lg mb-8">Web Developer</p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact Me</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mt-8 relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {projects.slice(currentIndex, currentIndex + 4).map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        title={project.title}
                        image={project.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;
