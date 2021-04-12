import Head from 'next/head';
import Widgets from '../components/Widgets';

export default function Home() {
  return (
    <div className='w-full h-screen max-h-screen min-w-full'>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Widgets />
    </div>
  );
}