import React from "react";
import Classes from "./FrequencyMeter.module.css";
import RangeMeter from "../rangeMeter/RangeMeter";
import RangeSlider from "../rangeSlider/RangeSlider";
export default function FrequencyMeter() {
  return (
    <div className={Classes.meterContainer}>
      <div className={Classes.meter}>
        <div className={Classes.header}>
          <label>Pie Size is $4</label>
          <label>Time:&nbsp;6sec</label>
        </div>
        <div className={Classes.messageWrapper}>
          <p className={Classes.message}>Please Place your Offer</p>
        </div>
        <RangeMeter />
        <RangeSlider />
        <RangeMeter />
      </div>
    </div>
  );
}
