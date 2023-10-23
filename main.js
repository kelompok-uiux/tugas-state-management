import { makeObservable, observable, action } from "mobx";

document.addEventListener("DOMContentLoaded", () => {
  class ColorStore {
    greenBox = "green";
    blueBox = "blue";

    constructor() {
      makeObservable(this, {
        greenBox: observable,
        blueBox: observable,
        toggleColor: action,
      });
    }

    toggleColor(targetColor) {
      if (targetColor === "blue") {
        if (this.blueBox === "red") {
          this.blueBox = "blue";
        }
      } else {
        this.blueBox = "red";
      }
    }
  }

  const colorStore = new ColorStore();

  const changeColor = (targetColor) => {
    colorStore.toggleColor(targetColor);
    updateBoxStyles();
  };

  window.changeColor = changeColor;

  const updateBoxStyles = () => {
    const greenBox = document.getElementById("greenBox");
    const blueBox = document.getElementById("blueBox");

    greenBox.className = `color-box ${colorStore.greenBox}`;
    blueBox.className = `color-box ${colorStore.blueBox}`;
  };
});
