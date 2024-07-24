/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'background' : '#10141A',
        'box' : "#1D2229",
        'domain-box' : '#DF6710',
        'ip-box' : '#565392',
        'cloud-box' : '#D1B003',
        'box-little' : '#327794'
        
      },
    },
  },
  plugins: [],
}

