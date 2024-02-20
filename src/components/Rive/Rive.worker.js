import riveWASMResource from '@rive-app/canvas/rive.wasm?url';
import { RuntimeLoader, Alignment, Fit, Layout, Rive } from "@rive-app/canvas";

RuntimeLoader.setWasmUrl(riveWASMResource)

onmessage = (e) => {
    const { canvas } = e.data;
    console.log(canvas);
    // const { src, fit, alignment, autoplay, statemachines } = canvas.dataset;
    
    // const layout = new Layout({ fit: Fit[fit], alignment: Alignment[alignment] });
    
    // new Rive({ 
    //   canvas, 
    //   src, 
    //   layout, 
    //   autoplay: typeof autoplay != "undefined",
    //   stateMachines: statemachines,
    // });
};