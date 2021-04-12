import React from 'react';
import Head from 'next/head';
import AboutContent from '../components/AboutContent';
import LinkPage from '../components/LinkPage';

export default function About() {
  return (
    <div className='w-100 h-screen max-h-screen bg-gray-200'>
      <Head>
        <title>About - Daytech Dashboard</title>
      </Head>
      <LinkPage />
      <AboutContent />
    </div>
  );
}