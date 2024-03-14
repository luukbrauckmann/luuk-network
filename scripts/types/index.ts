import { default as writeBlockTypes } from './block';
import { default as writeIconTypes } from './icon';

writeBlockTypes()
  .then(() => console.log('Block types check!'));
writeIconTypes()
  .then(() => console.log('Icon types check!'));