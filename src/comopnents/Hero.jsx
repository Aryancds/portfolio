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




const VideoBackground = () => {
    return (
        <video autoPlay muted loop className="absolute inset-0 z-0 w-full h-full object-cover">
            <source src="your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

const Hero = () => {



    return (
        <div className='mx-4 mt-20 sm:grid grid-cols-12 space-x-4 max-w-screen' >

            <div className=' rounded-lg h-[620px]  bg-transperent col-span-2' >

                <div className='bg-white rounded-lg items-center justify-center h-full grid grid-rows-10'>

                    <AnimatedDiv />

                    <div className='row-span-3 text-center font-mono  '>

                        <div justify-center items-center>

                            <div className='text-2xl mt-4'> Aryan Patel</div>

                            <div className=' justify-center items-center space-y-2 grid grid-rows-2'>

                                <div className='rounded justify-center items-center bg-stone-400 '>
                                    Web Developer
                                </div>

                                <div className='flex justify-center items-center space-x-2 '>
                                    <a href="https://www.facebook.com/profile.php?id=100036269282981&mibextid=rS40aB7S9Ucbxw6v" >
                                        <div className='bg-stone-400 p-2 rounded-xl'><FaFacebook /></div>
                                    </a>
                                    <a href="https://twitter.com">
                                        <div className='bg-stone-400 p-2 rounded-xl'><FaTwitter /></div>
                                    </a>
                                    <a href="https://www.linkedin.com/in/aryan-patel-a36196244/">
                                        <div className='bg-stone-400 p-2 rounded-xl'><FaLinkedin /></div>
                                    </a>
                                    <a href="https://github.com/aryancds" >
                                        <div className='bg-stone-400 p-2 rounded-xl'><FaGithub /></div>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='row-span-4 font-mono h-full'>

                        <div className='grid grid-row-4 justify-center items-center space-y-4'>
                            <div className="flex row-span-1 items-center bg-stone-400 rounded-xl p-2">
                                <FaPhone className="text-xl" />
                                <div className="ml-2">9484534949</div>
                            </div>
                            <div className="flex row-span-1 items-center bg-stone-400 rounded-xl p-2">
                                <FaEnvelope className="text-xl" />
                                <div className="ml-2">art3miz07@gmail.com</div>
                            </div>
                            <div className="flex row-span-1 items-center bg-stone-400 rounded-xl p-2">
                                <FaMapMarkerAlt className="text-xl" />
                                <div className="ml-2">Surat, Gujarat</div>
                            </div>
                            <div className="flex row-span-1 items-center bg-stone-400 rounded-xl p-2">
                                <FaCalendarAlt className="text-xl" />
                                <div className="ml-2">18/08/2003</div>
                            </div>
                        </div>

                    </div>

                    <div className='row-span-1 flex justify-center items-center'>
                        <a href="https://drive.google.com/file/d/1qwmiYjRBDs7cTn4fB22bxiyudNUMkND2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="bg-stone-500 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded">
                                <IoMdDownload className="w-6 h-6 inline-block" />
                                <span className='font-mono'>Download CV</span>
                            </button>
                        </a>
                    </div>

                </div>

            </div>

            <div className='p-4 items-center rounded-lg col-span-8 '>
                <div className='text-center'>

                    <h1 className='text-2xl font-mono p-4 '>Projects</h1>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

                        <div className="bg-gray-200 p-4 rounded-md h-full">
                            <h2 className="text-xl font-bold mb-2">Diamond Price Calculation Software</h2>
                            <p className="text-gray-600">Overview: The Diamond Price Calculation Software is a comprehensive tool designed for jewelers, gemologists, and diamond traders to accurately calculate the price of diamonds based on various factors such as carat weight, cut, color, clarity, and market trends.</p>
                        </div>

                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-bold mb-2">Project 2</h2>
                            <p className="text-gray-600">Details about Project 2</p>
                        </div>


                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-bold mb-2">Project 3</h2>
                            <p className="text-gray-600">Details about Project 3</p>
                        </div>


                        <div className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-xl font-bold mb-2">Project 4</h2>
                            <p className="text-gray-600">Details about Project 4</p>
                        </div>

                    </div>

                </div>
            </div>


            <div className='p-4 rounded-lg col-span-2'>

                <div>

                </div>

            </div>

        </div>
    );
};

export default Hero;
