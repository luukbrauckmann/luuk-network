import fs from 'node:fs/promises';
import path from 'node:path';

const inputDir = './src/assets/icons/';
const outputFile = './src/components/Icon/Icon.d.ts';

export default async function() {
  const files = await fs.readdir(inputDir);
  const fileNames = files
    .filter(file => file.endsWith('.svg'))
    .map(file => path.basename(file, '.svg'));

  await fs.writeFile(outputFile, 
    `export type Icon = ${fileNames.map(name => `'${name}'`).join(' | ')};`
  );
}
