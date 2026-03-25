const fs = require('fs');
const files = [
  'src/app/solutions/2-3-wheeler/page.tsx',
  'src/app/solutions/new-application-business/page.tsx'
];

const replacers = {
  'clamp(34px, 6vw, 64px)': 'clamp(28px, 5vw, 48px)',
  'clamp(14px, 1.8vw, 22px)': 'clamp(13px, 1.5vw, 18px)',
  'clamp(28px, 4vw, 46px)': 'clamp(22px, 3vw, 36px)',
  'clamp(14px, 1.6vw, 18px)': 'clamp(13px, 1.4vw, 16px)',
  'clamp(20px, 2.1vw, 34px)': 'clamp(18px, 1.8vw, 28px)',
  'clamp(14px, 1.45vw, 18px)': 'clamp(13px, 1.35vw, 16px)',
  'clamp(16px, 1.5vw, 24px)': 'clamp(15px, 1.3vw, 20px)',
  'clamp(12px, 1.1vw, 18px)': 'clamp(12px, 1.1vw, 16px)',
  'clamp(18px, 2vw, 22px)': 'clamp(16px, 1.5vw, 20px)',
  'clamp(22px, 2vw, 32px)': 'clamp(18px, 1.6vw, 26px)',
  'clamp(13px, 1.05vw, 17px)': 'clamp(13px, 1.05vw, 16px)',
  'clamp(14px, 1.1vw, 18px)': 'clamp(13px, 1.1vw, 16px)',
  'clamp(15px, 1.15vw, 18px)': 'clamp(14px, 1.15vw, 16px)',
  'clamp(20px, 2.4vw, 24px)': 'clamp(18px, 2vw, 22px)',
  'clamp(24px, 3.2vw, 42px)': 'clamp(20px, 2.8vw, 32px)',
  'clamp(14px, 1.7vw, 20px)': 'clamp(13px, 1.5vw, 18px)',
  'fontSize: "15px"': 'fontSize: "14px"',
  'fontSize: "13px"': 'fontSize: "12px"',
  'font-semibold': 'font-medium',
  'font-bold': 'font-medium',
  'text-white/80 font-medium': 'text-white/80 font-normal',
  'text-[#121010]/75 font-medium': 'text-[#121010]/75 font-normal',
  'text-[#475569] font-medium': 'text-[#475569] font-normal',
  'text-[#121010] font-medium': 'text-[#121010] font-normal',
  'text-white/85 font-medium': 'text-white/85 font-normal'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [key, value] of Object.entries(replacers)) {
    content = content.split(key).join(value);
  }
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
