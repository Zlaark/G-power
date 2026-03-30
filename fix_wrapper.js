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

  // Check if it's missing the wrapper
  if (!content.includes('id="datasheet-content"')) {
    // We use a broader regex to catch any cover/sheet pairs
    content = content.replace(
      /(\n\s*)(<[A-Za-z0-9]+SpecsCoverSection \/>)\s*(<[A-Za-z0-9]+SpecsSheetSection \/>)/,
      '$1<div id="datasheet-content" className="flex flex-col gap-7">\n                $2\n                $3\n              </div>'
    );
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed missing wrapper wrapper: ${filePath}`);
  }
}
console.log('Verification/Fix Done!');
