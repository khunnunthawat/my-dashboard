import Head from 'next/head';
import LinkPage from '../components/LinkPage';
import Widgets from '../components/Widgets';
// import WidgetsCard from '../components/WidgetsCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Widgets - Daytech Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-full h-screen max-h-screen min-w-full bg-gray-200'>
        <LinkPage />
        {/* <WidgetsCard /> */}
        <Widgets />
      </div>
    </div>
  );
}
