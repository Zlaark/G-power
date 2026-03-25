const fs = require('fs');
const files = [
  'src/app/solutions/2-3-wheeler/page.tsx',
  'src/app/solutions/new-application-business/page.tsx'
];

const replacers = {
  // Hero section - better mobile height and padding
  'relative h-[52vh] min-h-[360px] sm:min-h-[430px] md:h-[70vh] md:min-h-[560px] flex items-center justify-center bg-[#121010] overflow-hidden pt-20':
    'relative h-auto min-h-[380px] sm:min-h-[430px] md:h-[65vh] md:min-h-[520px] flex items-center justify-center bg-[#121010] overflow-hidden pt-[140px] pb-[50px] sm:pt-[150px] sm:pb-[60px] md:pt-20 md:pb-0',

  // Hero container - tighter mobile padding
  'container relative z-10 px-4 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl':
    'container relative z-10 px-5 sm:px-6 md:px-[60px] lg:px-[80px] mx-auto text-center max-w-5xl',

  // Section padding - reduce for mobile
  'py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F3F4F6]':
    'py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#F3F4F6]',

  'py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#F9FAFB]':
    'py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#F9FAFB]',

  'py-[64px] lg:py-[92px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-white':
    'py-[40px] sm:py-[56px] lg:py-[92px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-white',

  'py-[72px] lg:py-[110px] px-4 sm:px-6 md:px-[90px] lg:px-[120px] bg-[#121010]':
    'py-[48px] sm:py-[64px] lg:py-[110px] px-5 sm:px-6 md:px-[60px] lg:px-[120px] bg-[#121010]',

  // Section inner heading margins - tighter on mobile
  'text-center max-w-4xl mx-auto mb-[56px] lg:mb-[72px]':
    'text-center max-w-4xl mx-auto mb-[32px] sm:mb-[48px] lg:mb-[72px]',

  'text-center max-w-4xl mx-auto mb-[40px] lg:mb-[52px]':
    'text-center max-w-4xl mx-auto mb-[24px] sm:mb-[36px] lg:mb-[52px]',

  'text-center max-w-4xl mx-auto mb-[16px] lg:mb-[22px]':
    'text-center max-w-4xl mx-auto mb-[14px] sm:mb-[16px] lg:mb-[22px]',

  'text-center max-w-4xl mx-auto mb-[18px] lg:mb-[22px]':
    'text-center max-w-4xl mx-auto mb-[14px] sm:mb-[18px] lg:mb-[22px]',

  // Product grid card min height - remove on mobile
  'h-full min-h-[250px] lg:min-h-[290px]':
    'h-full min-h-0 sm:min-h-[250px] lg:min-h-[290px]',

  // Recommended product card min height - remove on mobile
  'h-full min-h-0 lg:min-h-[610px]':
    'h-full min-h-0 lg:min-h-[580px]',

  // Image heights - smaller on mobile
  'relative h-[240px] sm:h-[290px] lg:h-[340px] w-full':
    'relative h-[200px] sm:h-[260px] lg:h-[340px] w-full overflow-hidden',

  'relative h-[220px] w-full':
    'relative h-[180px] sm:h-[220px] w-full overflow-hidden',

  // Main image in benefits section
  'relative w-full h-[300px] md:h-[420px] lg:h-[560px] rounded-[18px] overflow-hidden':
    'relative w-full h-[240px] sm:h-[300px] md:h-[420px] lg:h-[560px] rounded-[14px] sm:rounded-[18px] overflow-hidden',

  // Grid gap between image and text in benefits section
  'grid grid-cols-1 lg:grid-cols-2 items-center gap-[40px] lg:gap-[88px]':
    'grid grid-cols-1 lg:grid-cols-2 items-center gap-[28px] sm:gap-[40px] lg:gap-[88px]',

  // Benefits list spacing
  'space-y-[22px]':
    'space-y-[16px] sm:space-y-[22px]',

  // Subtitle paragraph margin
  'font-normal text-center mb-[36px] lg:mb-[48px]':
    'font-normal text-center mb-[24px] sm:mb-[36px] lg:mb-[48px]',

  // CTA buttons - full width stacking on mobile
  'flex flex-wrap items-center justify-center gap-[12px]':
    'flex flex-col sm:flex-row flex-wrap items-center justify-center gap-[12px] sm:gap-[14px]',

  // Cards padding - tighter on mobile
  'p-[22px] lg:p-[24px] flex flex-col flex-1':
    'p-[16px] sm:p-[22px] lg:p-[24px] flex flex-col flex-1',

  'p-[20px] lg:p-[22px] flex-1 flex flex-col gap-[8px]':
    'p-[16px] sm:p-[20px] lg:p-[22px] flex-1 flex flex-col gap-[6px] sm:gap-[8px]',

  // Product card padding
  'p-[22px] flex flex-col':
    'p-[16px] sm:p-[22px] flex flex-col',

  // Spec grid gap
  'grid grid-cols-2 gap-x-[16px] gap-y-[16px] mb-[26px]':
    'grid grid-cols-2 gap-x-[12px] sm:gap-x-[16px] gap-y-[12px] sm:gap-y-[16px] mb-[20px] sm:mb-[26px]',

  // Card description margin
  'font-normal leading-[1.65] mb-[22px]':
    'font-normal leading-[1.65] mb-[16px] sm:mb-[22px]',

  // Card title margin  
  'font-normal mb-[16px]':
    'font-normal mb-[10px] sm:mb-[16px]',
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [key, value] of Object.entries(replacers)) {
    content = content.split(key).join(value);
  }
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
