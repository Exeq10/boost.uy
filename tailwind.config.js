/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      screens: {

       
          'phone': '278px',
         
    
  },

  maxWidth: {
    'custom': '24rem',
  }
,








      
      colors: {
        pinkPrincipal: " #FF589E",
        pinkOpacity: " #FF589ECC",
       
        
      },
      fontFamily: {
        serif: "DM Serif Display",
        roboto: "Roboto",
      
      },

      rotate: {
        '17.5': '17.5deg',
        '18': '18deg',
      },

      boxShadow: {
        'custom': ' 4px 6px 6px 2px #00000040',
        'reversecustom': '  12px -4px 6px 2px #00000040',

        'glass': ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
       
        ,
      }

      



      
    },
  },
  plugins: [],
};
