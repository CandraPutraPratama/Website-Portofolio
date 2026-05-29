const fs = require('fs');
const path = require('path');

const cssPath = 'C:\\Users\\LENOVO\\.gemini\\antigravity-ide\\brain\\af3a33c2-9b79-4b82-97a7-fa62dcf8e962\\scratch\\5baf70e455efe739.css';
const css = fs.readFileSync(cssPath, 'utf8');

// Find all occurrences and print the surrounding style blocks
const blocks = css.split('}');
const folderBlocks = blocks.filter(b => b.includes('folder') || b.includes('paper'));

console.log('Found', folderBlocks.length, 'blocks');
folderBlocks.forEach(b => {
  if (b.trim()) {
    console.log(b.trim() + '}');
  }
});
