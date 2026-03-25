const fs = require('fs');
const files = [
  'src/app/solutions/2-3-wheeler/page.tsx',
  'src/app/solutions/new-application-business/page.tsx'
];

const replacers = {
  // Product merit cards - remove scale/translate hover on mobile
  'transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:border-[#EF3C38]/20':
    'transition-all duration-700 ease-in-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-3 md:hover:scale-105 hover:border-[#EF3C38]/20',

  // Recommended product cards - remove translate hover on mobile
  'transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:-translate-x-1 hover:border-[#EF3C38]/10':
    'transition-all duration-700 ease-in-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-2 md:hover:-translate-x-1 hover:border-[#EF3C38]/20',

  // Case study cards - remove scale/translate hover on mobile
  'transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] hover:border-[#EF3C38]/10':
    'transition-all duration-700 ease-in-out hover:shadow-xl md:hover:shadow-2xl md:hover:-translate-y-3 md:hover:scale-[1.02] hover:border-[#EF3C38]/20',

  // Image zoom on hover - disable on mobile
  'transition-transform duration-1000 ease-in-out group-hover:scale-[1.08]':
    'transition-transform duration-1000 ease-in-out md:group-hover:scale-[1.08]',

  'transition-transform duration-1000 ease-in-out hover:scale-110':
    'transition-transform duration-1000 ease-in-out md:hover:scale-110',

  // Icon hover scale - disable on mobile
  'transition-transform duration-700 ease-in-out group-hover:scale-125 group-hover:rotate-6':
    'transition-transform duration-700 ease-in-out md:group-hover:scale-125 md:group-hover:rotate-6',

  // CTA buttons - disable scale on mobile
  'transition-all duration-500 ease-in-out hover:bg-[#d63532] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]':
    'transition-all duration-500 ease-in-out hover:bg-[#d63532] md:hover:scale-105 md:hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]',

  'transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg':
    'transition-all duration-500 ease-in-out hover:bg-white/10 hover:border-white md:hover:scale-105 md:hover:-translate-y-1 hover:shadow-lg',

  // View details link
  'transition-all duration-500 ease-in-out group-hover:gap-4':
    'transition-all duration-500 ease-in-out md:group-hover:gap-4',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [key, value] of Object.entries(replacers)) {
    content = content.split(key).join(value);
  }
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
