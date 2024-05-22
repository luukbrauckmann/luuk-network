import { Rive } from "@rive-app/canvas";

const riveInstances = new Map();

onmessage = ({ data }) => {
    
    if (data.type === "load") {
      const canvas = data.canvas;

      const rive = new Rive({
        src: "/rive-test.riv",
        canvas: canvas,
        autoplay: true,
        stateMachines: "bumpy",
        onLoad: () => {
          postMessage({ type: "LOADED" });
        },
      });

      riveInstances.set(rive);
  }

};
