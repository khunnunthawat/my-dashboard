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