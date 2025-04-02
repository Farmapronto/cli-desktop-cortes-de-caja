// tailwind.config.js
module.exports = {
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}', // Asegúrate de incluir todos los archivos relevantes
    ],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui')],
  };
  