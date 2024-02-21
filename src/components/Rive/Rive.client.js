import { Alignment, Fit, Layout, Rive, RuntimeLoader } from "@rive-app/canvas";
import riveWASMResource from "@rive-app/canvas/rive.wasm?url";

RuntimeLoader.setWasmUrl(riveWASMResource);

class RiveCanvas extends HTMLElement {
  constructor() {
    super();

    const canvas = this.querySelector("canvas");

    const { src, fit, alignment, autoplay, statemachines } = canvas.dataset;

    const layout = new Layout({
      fit: Fit[fit],
      alignment: Alignment[alignment],
    });

    const rive = new Rive({
      canvas,
      src,
      layout,
      autoplay: typeof autoplay != "undefined",
      stateMachines: statemachines,
    });
  }
}

customElements.define("rive-canvas", RiveCanvas);
