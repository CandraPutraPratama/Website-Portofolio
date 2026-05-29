const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\af3a33c2-9b79-4b82-97a7-fa62dcf8e962\\.system_generated\\steps\\270\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find all spans with class year-stroke or containing years
console.log('Searching for year spans in content.md...');
let pos = content.indexOf('year-stroke');
while (pos !== -1) {
  const start = Math.max(0, pos - 150);
  const end = Math.min(content.length, pos + 400);
  console.log('--- Year Stroke Match ---');
  console.log(content.substring(start, end));
  pos = content.indexOf('year-stroke', pos + 1);
}
