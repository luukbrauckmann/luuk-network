import riveWASMResource from '@rive-app/canvas-advanced/rive.wasm?url';
import Rive from '@rive-app/canvas-advanced';


addEventListener('message', async ({ data }) => {
  const rive = await Rive({ locateFile: () => riveWASMResource });

  console.log(rive);
});