import Head from 'next/head';
import LinkPage from '../components/LinkPage';
import Widgets from '../components/Widgets';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full h-screen max-h-screen min-w-full bg-gray-200'>
        <LinkPage />
        <div className='w-100 max-w-4xl mx-auto p-5'>
          <Widgets />
        </div>
      </div>
    </div>
  );
}
