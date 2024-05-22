class RiveCanvas extends HTMLElement {
  canvas = this.querySelector("canvas");
  offscreenCanvas = this.canvas.transferControlToOffscreen();
  worker = new Worker(new URL("./Rive.worker.js", import.meta.url), { type: "module" });

  constructor() {
    super();
  }

  connectedCallback() {
    this.worker.postMessage({type: "load", canvas: this.offscreenCanvas}, [this.offscreenCanvas]);
  }
}

customElements.define("rive-canvas", RiveCanvas);
