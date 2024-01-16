import ControlPage from '@/components/ControlPage';
import Header from '@/components/Header'
import Main from '@/components/Main'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arash Goodarzi Resume',
  description: 'Welcome to Arash Goodarzi\'s Resume, which is built with Next.js, Node.js, and Tailwind CSS',
}

const Resume = () => {
  const repo = 'arashgoodarzi';
  
  return (
    <div className='h-full'>
      <div className="w-full">
        <div className="md:mx-5 mx-4">
          <div className="relative">
            <Header />
            <Main />
            <ControlPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;