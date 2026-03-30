const fs = require('fs');
const path = require('path');

function findSpecsPages(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findSpecsPages(fullPath, fileList);
    } else if (fullPath.endsWith('specs\\page.tsx') || fullPath.endsWith('specs/page.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const baseDir = path.join(__dirname, 'src', 'app', 'product');
const pages = findSpecsPages(baseDir);

for (const filePath of pages) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Expand max container width to handle side-by-side 2-page pamphlet
  content = content.replace(
    /<div className="mx-auto max-w-\[980px\] w-full">/g,
    '<div className="mx-auto max-w-[1536px] w-full">'
  );

  // 2. Change the wrapper layout to split to 2 columns on extra large screens
  content = content.replace(
    /<div id="datasheet-content" className="flex flex-col gap-7">/g,
    '<div id="datasheet-content" className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-7 items-start">'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Responsive layout applied to: ${filePath}`);
}
console.log('Done!');
