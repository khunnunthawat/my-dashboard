import React from 'react';
import Head from 'next/head';
import AboutContent from '../components/AboutContent';

export default function About() {
  return (
    <div className='w-100 h-screen max-h-screen'>
      <Head>
        <title>About - Daytech Dashboard</title>
      </Head>
      <AboutContent />
    </div>
  );
}