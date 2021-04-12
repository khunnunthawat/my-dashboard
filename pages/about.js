import React, { Component } from 'react';
import Head from 'next/head';
import AboutContent from '../components/AboutContent';
import LinkPage from '../components/LinkPage';

class About extends Component {
  render() {
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
}

export default About;
