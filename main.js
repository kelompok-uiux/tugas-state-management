// Redux Actions with Redux Toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  blueDivColor: "blue",
};

const divSlice = createSlice({
  name: "div",
  initialState,
  reducers: {
    changeBlueColor: (state) => {
      state.blueDivColor = state.blueDivColor === "red" ? "blue" : "red";
    },
  },
});

const store = configureStore({
  reducer: {
    div: divSlice.reducer,
  },
});

const { changeBlueColor } = divSlice.actions;

document.addEventListener("DOMContentLoaded", function () {
  const greenDiv = document.getElementById("greenBox");
  const blueDiv = document.getElementById("blueBox");

  function updateBlueDivColor() {
    const state = store.getState().div;
    blueDiv.className = `color-box ${state.blueDivColor}`;
  }

  updateBlueDivColor();

  greenDiv.addEventListener("click", () => {
    if (store.getState().div.blueDivColor === "red") {
      return;
    }
    store.dispatch(changeBlueColor());
    updateBlueDivColor();
  });

  blueDiv.addEventListener("click", () => {
    const state = store.getState().div;
    if (state.blueDivColor === "red") {
      store.dispatch(changeBlueColor());
      updateBlueDivColor();
    }
  });
});
