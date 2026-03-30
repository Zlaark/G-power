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

  // Skip if already processed
  if (content.includes('DownloadPdfButton')) continue;

  // 1. Add import
  content = content.replace(
    /import \{ FadeIn \} from "@\/components\/FadeIn";/,
    'import { FadeIn } from "@/components/FadeIn";\nimport { DownloadPdfButton } from "@/components/DownloadPdfButton";'
  );

  // 2. Wrap Cover/Sheet in datasheet-content
  content = content.replace(
    /(<Utility[a-zA-Z0-9]+SpecsCoverSection \/>|<Residential[a-zA-Z0-9]+SpecsCoverSection \/>|<Ci[a-zA-Z0-9]+SpecsCoverSection \/>|<EV[a-zA-Z0-9]+SpecsCoverSection \/>|<CoreStationSpecsCoverSection \/>|<EnterpriseHubSpecsCoverSection \/>)\s*(<Utility[a-zA-Z0-9]+SpecsSheetSection \/>|<Residential[a-zA-Z0-9]+SpecsSheetSection \/>|<Ci[a-zA-Z0-9]+SpecsSheetSection \/>|<EV[a-zA-Z0-9]+SpecsSheetSection \/>|<CoreStationSpecsSheetSection \/>|<EnterpriseHubSpecsSheetSection \/>)/g,
    '<div id="datasheet-content" className="flex flex-col gap-7">\n                $1\n                $2\n              </div>'
  );

  // 3. Extract the product name string for the PDF filename based on the folder name
  const folderParts = filePath.split(/[\\/]/);
  const prodFolder = folderParts[folderParts.length - 3]; // the product slug
  const pdfFilename = `${prodFolder}-Datasheet.pdf`;

  // 4. Determine placeholder name based on what's caught in the old string pattern
  let productLabel = prodFolder;
  const productLabelMatch = content.match(/datasheet for (.*?) in PDF format with all specifications/);
  if (productLabelMatch) {
      productLabel = productLabelMatch[1];
  } else {
      // General fallback if exact regex doesn't hit
      const altMatch = content.match(/datasheet for (.*?) in PDF format/);
      if (altMatch) productLabel = altMatch[1];
  }

  // 5. Replace entire download panel block using a cleaner substring match instead of greedy replace
  const oldLinkRegex = /<Link href=".*?\.pdf" passHref>\s*<button className="btn-sweep btn-glow btn-float-hover mt-4 text-white font-semibold text-lg px-6 py-3 rounded-\[8px\] shadow-md transition-all duration-300">\s*<Download className="inline-block mr-2" \/> View & Download\s*<\/button>\s*<\/Link>/;
  
  content = content.replace(oldLinkRegex, 
`                  <DownloadPdfButton 
                    targetId="datasheet-content" 
                    filename="${pdfFilename}" 
                  />`);

  const oldDescRegex = /<p\s+className="text-white\/90 mb-7"\s+style=\{\{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp\(14px, 1.1vw, 18px\)" \}\}\s*>\s*Get the complete.*?\s*<\/p>/s;
  
  content = content.replace(oldDescRegex, 
`<p
                  className="text-white/90 mb-7 mt-6"
                  style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(14px, 1.1vw, 18px)" }}
                >
                  Get the complete 2-page technical datasheet for ${productLabel} in PDF format exactly as shown above, containing all specifications, features, and contact information.
                </p>`);

  const oldButtonsRegex = /<div className="flex flex-col sm:flex-row justify-center gap-3">\s*<a\s+href="#"\s+className="inline-flex items-center justify-center gap-2 bg-\[#EF3C38\] text-white px-5 py-3 rounded-\[10px\] font-normal hover:bg-\[#ff4a46\] transition-colors text-sm md:text-base w-full sm:w-auto"\s+style=\{\{ fontFamily: "'Poppins', sans-serif" \}\}\s*>\s*<Download className="w-5 h-5" \/>\s*Download PDF Datasheet\s*<\/a>/s;

  content = content.replace(oldButtonsRegex, 
`<div className="flex flex-col sm:flex-row justify-center gap-3">
                  <DownloadPdfButton 
                    targetId="datasheet-content" 
                    filename="${pdfFilename}" 
                  />`);

  // Final fix for the inner padding of the Request More info to be font-medium (cosmetic consistency with latest design)
  content = content.replace(/font-normal hover:bg-\[#F1F5F9\] transition-colors text-sm md:text-base w-full sm:w-auto"/g, 'font-medium hover:bg-[#F1F5F9] transition-colors text-sm md:text-base w-full sm:w-auto"');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated: ${filePath}`);
}
console.log('Done!');
