import riveWasmUrl from '@rive-app/canvas/rive.wasm?url';
import { RuntimeLoader, Alignment, Fit, Layout, Rive } from "@rive-app/canvas";

RuntimeLoader.setWasmUrl(riveWasmUrl);

class RiveCanvas extends HTMLElement {
  constructor() {
    super();

    const canvas = document.querySelector("canvas");
    const alt = document.querySelector("p");

    const { src, fit, alignment, autoplay, statemachines } = canvas.dataset;

    const layout = new Layout({ fit: Fit[fit], alignment: Alignment[alignment] });

    const rive = new Rive({ 
      canvas, 
      src, 
      layout, 
      autoplay: typeof autoplay != "undefined",
      stateMachines: statemachines,
      onLoad: () => {
        rive.resizeDrawingSurfaceToCanvas();
      },
    });
  }
}

customElements.define("rive-canvas", RiveCanvas);
