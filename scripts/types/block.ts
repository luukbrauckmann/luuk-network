import fs from 'node:fs/promises';

const inputDir = './src/blocks';
const outputFile = './src/blocks/Blocks/Blocks.d.ts';

export default async function () {
  const files = await fs.readdir(inputDir, { withFileTypes: true });
  const fileNames = files
    .filter(file => file.isDirectory())
    .map(file => file.name);

  await fs.writeFile(outputFile, 
    `export type Block = ${fileNames.map(name => `'${name}' | '${name}Record'`).join(' | ')};`
  );
}
