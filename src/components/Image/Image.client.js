class EnhancedImage extends HTMLElement {
  img = this.querySelector("img");

  constructor() {
    super();

    if (this.img.complete) {
      this.removeBackgroundImage();
    } else {
      this.img.onload = () => this.removeBackgroundImage();
    }
  }

  removeBackgroundImage() {
    this.img.style.backgroundImage = "initial";
  }
}

customElements.define("enhanced-image", EnhancedImage);
