const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\af3a33c2-9b79-4b82-97a7-fa62dcf8e962\\.system_generated\\steps\\270\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

// Find all occurrences of z-30 pointer-events-none or similar
console.log('Searching for timeline dots...');
const term = 'translate-x-1/2 md:-translate-y-1/2 z-30';
let pos = content.indexOf(term);
while (pos !== -1) {
  const start = Math.max(0, pos - 150);
  const end = Math.min(content.length, pos + 400);
  console.log('--- Dot Occurrence ---');
  console.log(content.substring(start, end));
  pos = content.indexOf(term, pos + 1);
}
