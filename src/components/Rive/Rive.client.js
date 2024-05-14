import { Rive } from '@rive-app/canvas-lite';

class RiveCanvas extends HTMLElement {
  canvas = this.querySelector("canvas");

  constructor() {
    super();
  }

  loadRive() {
    const r = new Rive({
      src: "/rive-test.riv",
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
