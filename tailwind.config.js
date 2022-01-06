module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': ' 1rem',
      'xss':'1.25rem',
      'ts':'.75rem'
    },
colors:{
  'grey':'#e2e8f0',
  'gry':'#718096',
  'gr':'#22d1ee ',
  'white':'#fff',
  'backg':'#e5e7eb',
  'black':'#2d3748',
  'bluee':'#3366BB',
  'texxt':'#718096',
  'texx':'#a0aec0'
},

width:{
  'width':'max-width: 1140px',
  'width2':'min-width: 18rem',
  'width3':'max-width: 380px',
  'widthp': 'width : 48px'
},

height:{
  'height1':'height:48px'
},
    
    extend: {
      // textColor:['hover', 'group-hover'],
      boxShadow:{
        '2xxl': '1px 1px 5px 0 rgb(1 1 1 / 5%);',
        // transition:['hover', 'group-hover']
      }
    },

  },
  plugins: [],
}
