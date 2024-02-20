import riveWASMResource from '@rive-app/canvas-advanced/rive.wasm?url';
import RiveBuilder from '@rive-app/canvas-advanced';

const rive = await RiveBuilder({ locateFile: () => riveWASMResource });

addEventListener('message', async ({ data }) => {
  const { canvas } = data;
  
  const renderer = rive.makeRenderer(canvas, true);

  console.log(renderer);
});