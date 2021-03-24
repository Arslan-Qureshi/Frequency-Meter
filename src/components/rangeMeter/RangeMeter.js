import React from "react";
import Classes from "./RangeMeter.module.css";
export default function RangeMeter() {
  return (
    <div className={Classes.range}>
      <div className={Classes.upperDiv}></div>
      <div className={Classes.lowerDiv}>
        <span>0.5</span>
        <span>1</span>
        <span>1.5</span>
        <span>2</span>
        <span>2.5</span>
        <span>3</span>
        <span>3.5</span>
        <span>4</span>
        <span>4.5</span>
        <span>5</span>
        <span>5.5</span>
        <span>6</span>
      </div>
    </div>
  );
}
