import React, { useState, useEffect } from "react";
import Classes from "./RangeSlider.module.css";
export default function RangeSlider() {
  const [slide, setSlide] = useState("0.5");
  useEffect(() => {
    intializeBubble(0.5, 6);
    intializeBubbleDown(0.5, 6);
  }, []);
  const onInputHandler = (e) => {
    setBubble(e, slide);
    setBubbleDown(e, slide);
    setSlide(e.target.value);
  };
  // console.log(slide);
  function intializeBubble(min, max) {
    let bubble = document.getElementById("bubble");
    const newVal = Number(((min - min) * 34) / (max - min));
    bubble.innerHTML = slide;
    bubble.style.left = `calc(${newVal}% + (${300 - newVal}px))`;
  }
  function setBubble(e, slide) {
    let bubble = document.getElementById("bubble");
    let min = e.target.min;
    let max = e.target.max;
    let value = e.target.value;

    let newVal = Number(((value - min) * 44) / (max - min));
    if (
      value === "1.5" ||
      value === "2.5" ||
      value === "3.5" ||
      value === "4.5" ||
      value === "5.5"
    ) {
      // console.log(newVal);
      bubble.innerHTML = value;
      bubble.style.left = `calc(${newVal + 0.6}% + (${300 - newVal * 0.15}px))`;
      return;
    }
    // console.log(newVal);
    bubble.innerHTML = value;
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${300 - newVal * 0.15}px))`;
  }
  function intializeBubbleDown(min, max) {
    let bubble = document.getElementById("bubbledown");
    const newVal = Number(((min - min) * 34) / (max - min));
    bubble.innerHTML = slide;
    bubble.style.left = `calc(${newVal}% + (${300 - newVal}px))`;
  }
  function setBubbleDown(e, slide) {
    let bubble = document.getElementById("bubbledown");
    let min = e.target.min;
    let max = e.target.max;
    let value = e.target.value;

    let newVal = Number(((value - min) * 44) / (max - min));
    if (
      value === "1.5" ||
      value === "2.5" ||
      value === "3.5" ||
      value === "4.5" ||
      value === "5.5"
    ) {
      // console.log(newVal);
      bubble.innerHTML = value;
      bubble.style.left = `calc(${newVal + 0.6}% + (${300 - newVal * 0.15}px))`;
      return;
    }
    // console.log(newVal);
    bubble.innerHTML = value;
    // Sorta magic numbers based on size of the native UI thumb
    bubble.style.left = `calc(${newVal}% + (${300 - newVal * 0.15}px))`;
  }
  return (
    <div className={Classes.sliderWrapper}>
      <input
        type="range"
        min="0.5"
        max="6"
        step="0.5"
        value={slide}
        className={Classes.slider}
        id="myRange"
        onChange={(e) => {
          onInputHandler(e);
        }}
      />
      <output id="bubble" className={Classes.bubble}></output>
      <output id="bubbledown" className={Classes.bubbledown}></output>
    </div>
  );
}
