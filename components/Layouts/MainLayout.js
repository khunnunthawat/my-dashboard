import Page from '../Page';

export default function MainLayout({ children }) {
  return (
    <div className='w-full h-screen max-h-screen min-w-full bg-gray-200'>
      <div className='w-100 max-w-4xl mx-auto p-5'>
        <Page />
        {children}
      </div>
    </div>
  );
}