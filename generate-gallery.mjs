import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');
const outputFile = path.resolve('src/galleryImages.js');

const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
const excludedFolders = new Set([
  'pet-memorials',
  'granite-colors',
  'memorial-photos',
  'flower-vases',
  'inscriptions',
  'laser-etching',
  'bronze-plaques',
]);

function getImages(folder) {
  let images = [];

  const items = fs.readdirSync(folder, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(folder, item.name);

    if (item.isDirectory()) {
  if (!excludedFolders.has(item.name)) {
    images = images.concat(getImages(fullPath));
  }
} else if (supportedExtensions.includes(path.extname(item.name).toLowerCase())) {
      const relativePath = path.relative(publicDir, fullPath)
        .split(path.sep)
        .join('/');

      images.push(relativePath);
    }
  }

  return images;
}

const allImages = getImages(imagesDir).sort();

const fileContent = `
const base = import.meta.env.BASE_URL;

const galleryImages = [
${allImages.map(image => `  \`\${base}${image}\`,`).join('\n')}
];

export default galleryImages;
`;

fs.writeFileSync(outputFile, fileContent);

console.log(`Gallery updated with ${allImages.length} images.`);