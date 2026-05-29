const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\af3a33c2-9b79-4b82-97a7-fa62dcf8e962\\.system_generated\\steps\\270\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

const term = 'group/archive w-full relative';
let pos = content.indexOf(term);
while (pos !== -1) {
  console.log('--- Full Year Container HTML ---');
  // Print from pos to 3000 chars after
  console.log(content.substring(pos, pos + 2500));
  pos = content.indexOf(term, pos + 1);
}
