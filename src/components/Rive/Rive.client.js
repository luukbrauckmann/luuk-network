import { Rive } from '@rive-app/canvas';

class RiveCanvas extends HTMLElement {
  canvas = this.querySelector("canvas");

  constructor() {
    super();
  }

  loadRive() {
    const r = new Rive({
      src: "https://cdn.rive.app/animations/vehicles.riv",
      canvas: this.canvas,
      autoplay: true,
      stateMachines: "bumpy",
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });
  }

  connectedCallback() {
    this.loadRive();
  }
}

customElements.define("rive-canvas", RiveCanvas);
