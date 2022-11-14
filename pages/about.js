import React from 'react';
import Head from 'next/head';
import AboutContent from '../components/AboutContent';

export default function About() {
  return (
    <>
      <Head>
        <title>About - EIFFEL Dashboard</title>
      </Head>
      <AboutContent />
    </>
  );
}
