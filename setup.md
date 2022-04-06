## Setup
## nuovo progetto angular
ng new angular-playground
## tailwind.css
npm install -D tailwindcss postcss autoprefixer;\
npx tailwindcss init
## tailwind.config.js
<code>
const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
    prefix: '',
    purge: {
      enabled: guessProductionMode(),
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
</code>

