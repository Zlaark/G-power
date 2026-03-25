const fs = require('fs');
const files = [
  'src/app/solutions/2-3-wheeler/page.tsx',
  'src/app/solutions/new-application-business/page.tsx'
];

const replacers = {
  // Slow down all FadeIn durations by adding duration prop (default is 450ms, bump to 900ms)
  'direction="up">': 'direction="up" duration={900}>',
  'direction="left">': 'direction="left" duration={900}>',
  'direction="right">': 'direction="right" duration={900}>',

  // Slow down hover transitions on cards
  'transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105': 'transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-105',
  'transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl': 'transition-all duration-700 ease-in-out hover:-translate-y-2 hover:shadow-2xl',
  'transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]': 'transition-all duration-700 ease-in-out hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]',

  // Slow down icon animations
  'transition-transform duration-500 group-hover:scale-125': 'transition-transform duration-700 ease-in-out group-hover:scale-125',

  // Slow down image zoom on hover
  'transition-transform duration-700 ease-out group-hover:scale-[1.12]': 'transition-transform duration-1000 ease-in-out group-hover:scale-[1.08]',
  'transition-transform duration-700 hover:scale-110': 'transition-transform duration-1000 ease-in-out hover:scale-110',

  // Slow down button hover
  'transition-all duration-300 hover:bg-[#d63532] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]': 'transition-all duration-500 ease-in-out hover:bg-[#d63532] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]',
  'transition-all duration-300 hover:bg-white/10': 'transition-all duration-500 ease-in-out hover:bg-white/10',

  // Slow down View Details link
  'transition-all duration-300 group-hover:gap-4': 'transition-all duration-500 ease-in-out group-hover:gap-4',

  // Increase FadeIn delays to space out staggered animations more
  'delay={120}': 'delay={200}',
  'delay={220}': 'delay={400}',
  'delay={340}': 'delay={600}',
  'delay={100}': 'delay={180}',
  'delay={150}': 'delay={300}',
  'delay={180}': 'delay={400}',
  'delay={130}': 'delay={250}',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [key, value] of Object.entries(replacers)) {
    content = content.split(key).join(value);
  }
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
