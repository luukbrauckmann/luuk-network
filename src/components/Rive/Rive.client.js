// import riveWASMResource from '@rive-app/canvas/rive.wasm?url';
// import { RuntimeLoader, Alignment, Fit, Layout, Rive } from "@rive-app/canvas";
import RiveWorkerUrl from "./Rive.worker.js?url";

// RuntimeLoader.setWasmUrl(riveWASMResource)

class RiveCanvas extends HTMLElement {
  constructor() {
    super();

    const canvas = this.querySelector("canvas").transferControlToOffscreen();

    const worker = new Worker(RiveWorkerUrl, { type: "module" });
    worker.postMessage({canvas}, [canvas]);

    // console.log(canvas);

    // const { src, fit, alignment, autoplay, statemachines } = canvas.dataset;
    // 
    // const layout = new Layout({ fit: Fit[fit], alignment: Alignment[alignment] });
    // 
    // new Rive({ 
    //   canvas, 
    //   src, 
    //   layout, 
    //   autoplay: typeof autoplay != "undefined",
    //   stateMachines: statemachines,
    // });
  }
}

customElements.define("rive-canvas", RiveCanvas);
