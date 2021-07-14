import Page from '../Page';

export default function MainLayout({ children }) {
  return (
    <div className='w-full h-screen max-h-screen min-w-full bg-gray-200'>
      <div className='w-100 max-w-4xl mx-auto p-5'>
        <h1 className='text-4xl font-bold'>Daytech Dashboard</h1>
        <Page />
        {children}
      </div>
    </div>
  );
}