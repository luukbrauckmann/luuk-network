import RiveWorker from "./Rive.worker.js?worker";

class RiveCanvas extends HTMLElement {
  constructor() {
    super();

    const canvas = this.querySelector("canvas");
    const offscreen = canvas.transferControlToOffscreen();

    const worker = new RiveWorker();
    worker.postMessage({ canvas: offscreen, ...canvas.dataset }, [offscreen]);
  }
}

customElements.define("rive-canvas", RiveCanvas);
