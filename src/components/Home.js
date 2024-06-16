import React from 'react';
import './Home.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Myphoto from './Myphoto.png';
import bg from './background.jpg';

const Home = () => {
  return (
    <>
      <div className='relative min-h-screen bg-fixed bg-cover bg-center pt-24' style={{ backgroundImage: `url(${bg})` }}>
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative flex items-center justify-center space-x-32 p-10 pt-24 text-slate-50'>
          <div className='text-left p-8 rounded-lg shadow-md'>
            <p className='text-4xl font-light drop-shadow-md my-3'>Hello, I am</p>
            <span className='text-6xl font-semibold drop-shadow-lg my-3 hover:text-[#FFD700]'>Arunav Gawri</span>
            <hr className="border-2 border-[#FFD700] my-4" />
            <p className='max-w-lg drop-shadow-sm my-3 text-2xl'>
              An undergraduate at NIT Kurukshetra
            </p>
            <div className='mt-8 flex space-x-4'>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-[#FFD700]'>
                <FaInstagram className='text-3xl' />
              </a>
              <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer' className='hover:text-[#FFD700]'>
                <FaLinkedin className='text-3xl' />
              </a>
              <a href='https://www.github.com' target='_blank' rel='noopener noreferrer' className='hover:text-[#FFD700]'>
                <FaGithub className='text-3xl' />
              </a>
            </div>
          </div>
          <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-3xl'>
            <div className='absolute inset-0 heroContainer' style={{ borderRadius: '1.5rem', borderColor: '#FFD700' }}>
              <div className='w-full h-full bg-opacity-50 rounded-3xl flex items-center justify-center'>
                <img src='#' alt='Arunav Gawri' className='w-full h-full rounded-3xl object-cover heroImg' />
              </div>
            </div>
          </div>
        </div>
        <div className='relative inset-x-0 bottom-10 mx-48 mt-12'>
          <div className='bg-[#efdd5a] opacity-55 p-6 border-6 border-[#FFD700] rounded-2xl'>
            <p className='text-black font-semibold text-xl px-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione aliquid assumenda alias est laudantium numquam vitae sit, distinctio nam repellendus deleniti aperiam, eius dicta, qui maxime aspernatur. Praesentium, labore!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
