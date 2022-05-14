import React, { FunctionComponent, useContext, useState } from "react";
//@ts-ignore
import ProgressBar from "react-customizable-progressbar";
import moment, { Moment } from "moment";
import Timer from "./Timer";
import { StoreContext } from "../utils/StoreContext";
const totalSeconds = 10;
const initialSeconds = 0;
const initialProgress = (initialSeconds / totalSeconds) * 100;

const getText = (date: Moment) => {
  return date.format("s[s]");
};

interface IndicatorProps {
  progress: number;
  elapsedSeconds: number;
}

const Indicator: FunctionComponent<IndicatorProps> = (props) => {
  const seconds = totalSeconds - props.elapsedSeconds - initialSeconds;
  const date = moment().startOf("day").seconds(seconds);

  return (
    <div className="indicator-countdown">
      <div>
        <div className={seconds > 0 ? "caption" : "caption big"}>
          Il vous reste
        </div>
        <div className={seconds > 0 ? "time" : "time hidden"}>
          {getText(date)}
        </div>
      </div>
    </div>
  );
};

const ProgressBarTimer: FunctionComponent = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [progress, setProgress] = useState(initialProgress);
  const { timeOver, startGame } = useContext(StoreContext);
  const roundProgress = (progress: number) => {
    const factor = Math.pow(10, 2);
    return Math.round(progress * factor) / factor;
  };

  const handleTimer = (elapsedSeconds: number) => {
    if (progress <= 99 && startGame) {
      const progress = roundProgress(
        ((elapsedSeconds + initialSeconds) / totalSeconds) * 100
      );
      setProgress(progress);
      setElapsedSeconds(elapsedSeconds);
    } else {
      timeOver();
    }
  };

  return (
    <div className="item">
      <div className="countdown">
        <ProgressBar
          radius={100}
          progress={progress}
          strokeWidth={5}
          strokeColor="indianred"
          trackStrokeWidth={3}
          trackStrokeColor="#e6e6e6"
          pointerRadius={5}
          pointerStrokeWidth={2}
          pointerStrokeColor="indianred"
        >
          <Indicator progress={progress} elapsedSeconds={elapsedSeconds} />
        </ProgressBar>
        <Timer
          initialSeconds={initialSeconds}
          totalSeconds={totalSeconds}
          onChange={handleTimer}
          interval={1000}
        />
      </div>
    </div>
  );
};

export default ProgressBarTimer;
