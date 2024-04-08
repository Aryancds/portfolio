import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';


const Hero = () => {
    return (
        <div className='p-4 mt-20 grid grid-cols-12 space-x-4 max-w-screen'>

            <div className=' rounded-lg h-[600px]  bg-slate-200 col-span-2'>

                <div className='bg-blue-200 items-center justify-center h-full grid grid-rows-8'>

                    <div className='rounded-lg row-span-1 '>
                        <img className='h-36 rounded-sm' src="/src/assets/bgmaina.jpg" alt="Example" />
                    </div>

                    <div className='text-xl text-center font-mono mt-2 row-span-3'>

                        <span className='text-2xl'> Aryan Patel</span>

                        <div className='justify-center items-center p-2 grid grid-rows-2'>

                            <div className='text-[15px] rounded w-max justify-center items-center px-2 bg-slate-400'>
                                WEB Developer
                            </div>

                            <div className='flex justify-center items-center space-x-4'>

                                <div><FaFacebook /></div>
                                <div><FaTwitter /></div>
                                <div><FaLinkedin /></div>
                                <div><FaGithub /></div>

                            </div>
                        </div>

                    </div>
                    <div className='row-span-3'>
                        <div className='h-64 bg-slate-500'>
                            phone
                        </div>
                    </div>

                </div>

            </div>
            <div className='p-4 rounded-lg bg-transperent col-span-8'>
                hello
            </div>
            <div className='p-4 rounded-lg bg-slate-200 col-span-2'>
                hiii
            </div>

        </div>
    );
};

export default Hero;
