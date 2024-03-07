import fs from 'node:fs/promises';
import path from 'node:path';

async function writeIconNameTypes() {
  const icons = await fs.readdir('./src/assets/icons/');
  const names = icons
    .filter(file => file.endsWith('.svg'))
    .map(file => path.basename(file, '.svg'));

  await fs.writeFile('./src/assets/icon-sprite/icon-sprite.d.ts', 
    `export type Name = ${names.map(name => `'${name}'`).join(' | ')};`
  );
}

writeIconNameTypes()
  .then(() => console.log('Icon names written to src/assets/icon-sprite.d.ts'));
