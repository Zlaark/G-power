const fs = require('fs');
const files = [
  'src/app/solutions/2-3-wheeler/page.tsx',
  'src/app/solutions/new-application-business/page.tsx'
];

const replacers = {
  'card-shimmer h-full min-h-[250px] lg:min-h-[290px] rounded-[16px] border border-[#121010]/10 bg-white p-[22px] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl': 'group card-shimmer h-full min-h-[250px] lg:min-h-[290px] rounded-[16px] border border-[#121010]/10 bg-white p-[22px] flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105 hover:border-[#EF3C38]/20',
  'w-8 h-8 text-[#EF3C38] mb-[18px]': 'w-8 h-8 text-[#EF3C38] mb-[18px] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6',
  'card-shimmer card-border-glow rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full min-h-0 lg:min-h-[610px] flex flex-col': 'group card-shimmer card-border-glow rounded-[18px] overflow-hidden border border-[#121010]/10 bg-[#F9FAFB] h-full min-h-0 lg:min-h-[610px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:-translate-x-1 hover:border-[#EF3C38]/10',
  'alt={product.title} fill className="object-cover" />': 'alt={product.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]" />',
  'card-shimmer card-border-glow rounded-[16px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col': 'group card-shimmer card-border-glow rounded-[16px] overflow-hidden border border-[#121010]/10 bg-white h-full flex flex-col transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02] hover:border-[#EF3C38]/10',
  'alt={item.title} fill className="object-cover" />': 'alt={item.title} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]" />',
  'bg-[#EF3C38] text-white font-medium hover:bg-[#d63532] transition-colors': 'bg-[#EF3C38] text-white font-medium transition-all duration-300 hover:bg-[#d63532] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(239,60,56,0.4)]',
  'text-white font-medium hover:bg-white/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg': 'text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white hover:scale-105 hover:-translate-y-1 hover:shadow-lg',
  '<FadeIn delay={150} direction="up">': '<FadeIn delay={150} direction="left">',
  '<FadeIn delay={180} direction="up">': '<FadeIn delay={180} direction="right">',
  'alt="Electric vehicle charging"\n                  fill\n                  className="object-cover"': 'alt="Electric vehicle charging"\n                  fill\n                  className="object-cover transition-transform duration-700 hover:scale-110"',
  'alt="Modern business technology lab"\n                  fill\n                  className="object-cover"': 'alt="Modern business technology lab"\n                  fill\n                  className="object-cover transition-transform duration-700 hover:scale-110"',
  'hover:text-[#d63532] hover:gap-4 transition-all duration-200': 'hover:text-[#d63532] transition-all duration-300 group-hover:gap-4',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [key, value] of Object.entries(replacers)) {
    content = content.split(key).join(value);
  }
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
