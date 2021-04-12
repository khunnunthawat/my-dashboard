import Head from 'next/head';
import LinkPage from '../components/LinkPage';
import Widgets from '../components/Widgets';
// import WidgetsCard from '../components/WidgetsCard';

export default function Home() {
  return (
    <div className='w-full h-screen max-h-screen min-w-full bg-gray-200'>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LinkPage />
      <Widgets />
    </div>
  );
}
