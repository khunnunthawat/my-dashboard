###
create project
npx create-next-app my-dashboard

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


LinkCSS
https://blog.marclucraft.co.uk/masonry-layout-with-tailwindcss
https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
CSS Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://www.tailwindtoolbox.com/
https://www.tailwind-kit.com/components

container w-full



Time
class Timer extends Component {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const[status, setStatus] = useState(0);
  
  render() {
    return (
      <div>
        <h2 class='text-lg font-bold text-gray-400 mb-1.5'>Timer</h2>
        <div className='text-center'>
          <div className='flex items-center justify-center mt-4 mb-6'>
            <div class='text-6xl mx-7'>00:00</div>
          </div>
          <button class='inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none'>
            Start
          </button>
          <button
            class=' inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500 hover:text-white hover:bg-gray-900 focus:outline-none'
            disabled=''
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}