const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = './assets/pictures';
const outputFolder = './assets/pictures/compressed';

// Create compressed folder if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Get all jpg and png files from the photos folder
const files = fs.readdirSync(inputFolder).filter(file => 
  ['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
);

console.log(`Found ${files.length} photos to compress...`);

// Compress each photo
files.forEach(file => {
  const inputPath = path.join(inputFolder, file);
  const outputPath = path.join(outputFolder, file);

  sharp(inputPath)
    .jpeg({ quality: 60 })
    .resize(1920, null, { // ← also add this to cap the resolution
    withoutEnlargement: true // don't upscale smaller images
  })
    .toFile(outputPath, (err, info) => {
      if (err) {
        console.error(`Error compressing ${file}:`, err);
      } else {
        const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
        const compressedSize = (info.size / 1024).toFixed(1);
        console.log(`✅ ${file}: ${originalSize}KB → ${compressedSize}KB`);
      }
    });
});