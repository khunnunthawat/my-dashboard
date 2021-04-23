###
  create project
  npx create-next-app my-dashboard
###

###
  Tailwind CSS
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
  npx tailwindcss init -p
  // tailwind.config.js
  tailwind.config.js => purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
  // pages/_app.js
  import 'tailwindcss/tailwind.css'

  /* ./styles/globals.css */
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
###

###
  LinkCSS
  https://blog.marclucraft.co.uk/masonry-layout-with-tailwindcss
  https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
  CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  https://www.tailwindtoolbox.com/
  https://www.tailwind-kit.com/components
  container w-full
###

###
  Ref.Time : 
  https://upmostly.com/tutorials/build-a-react-timer-component-using-hooks
  TimerStart
  https://dev.to/emmaadesile/build-a-timer-using-react-hooks-3he2
  https://codesandbox.io/s/react-hooks-timer-cuq74?from-embed=&file=/src/Timer.js
###

###
// Clear widget
  const clearWidgets = () => {
    // clear all history
    setListAllWidgets([]);
  };

  let colorTool = false;

  let clearBtn = (
    <Btn onClick={clearWidgets} colorTool={colorTool}>
      <RiSettings3Line className={`${iconTool}`} /> Settings
    </Btn>
  );
  if (listAllWidgets.length > 0) {
    clearBtn = (
      <Btn onClick={clearWidgets} colorTool={!colorTool}>
        <RiSettings3Line className={`${iconTool}`} /> Settings
      </Btn>
    );
  }
###

###
// iconEdit
  import { MdClose } from 'react-icons/md';
  import { MdEdit } from 'react-icons/md';

  <div class='absolute top-5 right-5'>
    <button class='text-lg text-gray-600 focus:outline-none mr-2'>
      <MdEdit />
    </button>
    <button class='text-lg text-gray-600 focus:outline-none undefined'>
      <MdClose />
    </button>
  </div>
###

###
  cheatsheet tailwind css
  Link : https://tailwindcomponents.com/cheatsheet/
###

###
  // Clear widget
  // const clearWidgets = () => {
  //   // clear all history
  //   setListAllWidgets([]);
  // };

  // let colorTool = false;

  // let clearBtn = (
  //   <Btn onClick={clearWidgets} colorTool={colorTool}>
  //     <RiSettings3Line className={`${iconTool}`} /> Settings
  //   </Btn>
  // );
  // if (listAllWidgets.length > 0) {
  //   clearBtn = (
  //     <Btn onClick={clearWidgets} colorTool={!colorTool}>
  //       <RiSettings3Line className={`${iconTool}`} /> Settings
  //     </Btn>
  //   );
  // }
###

###
  // Update widgets state เป็นค่าใหม่
  const onClickEdit = (newId, newValue) => {
    let newListAllWidgets = [];
    listAllWidgets.map((data) => {
      if (data.id === newId) {
        data.value = newValue;
        // return newId;
      }
      newListAllWidgets.push(data);
    });

    setListAllWidgets(newListAllWidgets);
  };

  // // Update widgets state เป็นค่าใหม่
  // setWidgets(
  //   widgets.map((widget) => {
  //     if (widget.id === updatedWidget.id) {
  //       return updatedWidget; // คืน widget ที่ทำการอัปเดตค่าแล้ว
  //     } else {
  //       return widget; // คืน widget ของเดิม
  //     }
  //   })
  // );
###

###
  // const [titleJustsay, setTitleJustsay] = useState('');
  // const [counter, setCouter] = useState('');
  // const [timer, setTimer] = useState('');
###