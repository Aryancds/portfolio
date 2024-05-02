import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';







const AnimatedDiv = () => {
    const bgImageRef = useRef(null);

    useEffect(() => {
        gsap.from(bgImageRef.current, { y: -200, duration: 1, ease: 'power3.out' });
    }, []);

    useEffect(() => {
        gsap.to(bgImageRef.current, { y: 0, duration: 1, ease: 'power3.out' });
    }, []);

    return (
        <div className="p-12 rounded-sm sm:p-8 row-span-2" ref={bgImageRef}>
            <div className="p-2 bg-stone-400 rounded">
                <img className="" src="/bgmaina.jpg" alt="Example" />
            </div>
        </div>
    );
};






const Hero = () => {



    return (
        <div className='mx-4 my-4 mt-16 sm:grid sm:grid-cols-12 sm:space-x-4 max-w-screen'>

            <div className='rounded-lg h-[680px] sm:h-[620px] col-span-12 sm:col-span-2'>
                <div className='bg-transperent rounded-lg items-center justify-center h-full grid grid-rows-10 text-white'>

                    <div className='row-span-2'>
                        <AnimatedDiv />
                    </div>

                    <div className='row-span-3 text-center font-mono'>
                        <div className='justify-center items-center'>
                            <div className='text-2xl mt-4'>Aryan Patel</div>
                            <div className='justify-center items-center space-y-2 grid grid-rows-2'>
                                <div className='justify-center items-center bg-blue-500 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                                    Web Developer
                                </div>
                                {/* icons */}
                                <div className='flex justify-center items-center space-x-2'>
                                    <a href="https://www.facebook.com/profile.php?id=100036269282981&mibextid=rS40aB7S9Ucbxw6v">
                                        <div className='bg-blue-500 p-2 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'><FaFacebook /></div>
                                    </a>
                                    <a href="https://twitter.com">
                                        <div className='bg-blue-500 p-2 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'><FaTwitter /></div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/aryan-patel-a36196244/">
                                        <div className='bg-blue-500 p-2 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'><FaLinkedin /></div>
                                    </a>
                                    <a href="https://github.com/aryancds">
                                        <div className='bg-blue-500 p-2 rounded-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'><FaGithub /></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* items */}
                    <div className='row-span-4 font-mono h-full'>
                        <div className='grid grid-row-4 justify-center items-center space-y-4'>
                            <div className="flex row-span-1 items-center bg-blue-500 rounded-xl p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <FaPhone className="text-xl" />
                                <div className="ml-2">9484534949</div>
                            </div>
                            <div className="flex row-span-1 items-center bg-blue-500 rounded-xl p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <FaEnvelope className="text-xl" />
                                <div className="ml-2">art3miz07@gmail.com</div>
                            </div>
                            <div className="flex row-span-1 items-center bg-blue-500 rounded-xl p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <FaMapMarkerAlt className="text-xl" />
                                <div className="ml-2">Surat, Gujarat</div>
                            </div>
                            <div className="flex row-span-1 items-center bg-blue-500 rounded-xl p-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <FaCalendarAlt className="text-xl" />
                                <div className="ml-2">18/08/2003</div>
                            </div>
                        </div>
                    </div>

                    {/* cv */}
                    <div className='row-span-1 flex justify-center items-center'>
                        <a href="https://drive.google.com/file/d/1qwmiYjRBDs7cTn4fB22bxiyudNUMkND2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <IoMdDownload className="w-6 h-6 inline-block" />
                                <span className='font-mono'>Download CV</span>
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            <div className='mt-4 items-center rounded-lg col-span-12 sm:col-span-10'>

                <div className='items-center justify-center rounded-lg bg-transperent'>
                    <h1 className='text-3xl font-mono p-4 text-white'>Projects</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
                    <div className="bg-transperent p-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-white">Diamond Price Calculation Software</h2>
                        <p className="text-gray-300">Overview: The Diamond Price Calculation Software is a comprehensive tool designed for jewelers, gemologists, and diamond traders to accurately calculate the price of diamonds based on various factors such as carat weight, cut, color, clarity, and market trends.</p>
                    </div>

                    <div className="bg-transperent p-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-white">Music School Website</h2>
                        <p className="text-gray-300">
                            The website serves as a window into the music school's offerings, showcasing its diverse programs, talented faculty, and upcoming events. With engaging visuals and easy navigation, visitors can explore classes, learn about instructors, and stay updated on performances, providing a glimpse into the vibrant musical community fostered by the school.
                        </p>
                    </div>

                    <div className="bg-transperent p-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-white">Tropical Media </h2>
                        <p className="text-gray-300">"Tropical Media" is a cutting-edge website designed for a graphics design company. It showcases the company's portfolio, services, and expertise in a visually stunning manner. Utilizing React and Tailwind CSS, the site offers a seamless user experience and embodies the company's commitment to innovation and creativity. With its sleek design and intuitive navigation, "Tropical Media" serves as a digital showcase for the company's talent and capabilities, attracting potential clients and collaborators. It reflects the company's dedication to excellence in graphic design and establishes a strong online presence in the competitive design industry.
                        </p>
                    </div>

                    <div className="bg-transperent p-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg">
                        <h2 className="text-xl font-bold mb-2 text-white">Project 4</h2>
                        <p className="text-gray-300">comming soon....</p>
                    </div>
                </div>

            </div>

        </div>

    );
};






export default Hero;
