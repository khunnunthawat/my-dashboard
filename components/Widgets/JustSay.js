import React from 'react';
import Card from '../Layouts/Card';

export default function JustSay({ title, list, index }) {
  return (
    <Card title='JustSay' key={index}>
      <div className='text-center mt-8 mb-12'>
        <h1 className='text-4xl font-bold'>{list.value}</h1>
      </div>
      <div className='text-xs text-gray-400'>
        <div className='mt-6 -mb-2 text-center'>{list.date}</div>
      </div>
    </Card>
  );
}

// export default function JustSay({ title, listAllWidgets }) {
//   return listAllWidgets.map((list, index) => {
//     console.log(list);
//     return (
//       <Card title='JustSay' key={index}>
//         <div className='text-center mt-8 mb-12'>
//           <h1 className='text-4xl font-bold'>{list.value}</h1>
//         </div>
//         <div className='text-xs text-gray-400'>
//           <div className='mt-6 -mb-2 text-center'>{list.date}</div>
//         </div>
//       </Card>
//     );
//   });
// }