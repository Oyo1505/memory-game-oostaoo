import { FunctionComponent, useContext, useState } from "react";
//@ts-ignore
import ProgressBar from "react-customizable-progressbar";
import moment, { Moment } from "moment";
import Timer from "./Timer";
import { StoreContext } from "../utils/StoreContext";
import { IndicatorProps } from "../interfaces/interfaces";

const totalSeconds = 10;
const initialSeconds = 0;
const initialProgress = (initialSeconds / totalSeconds) * 100;

const getText = (date: Moment) => {
  return date.format("s[s]");
};

const Indicator: FunctionComponent<IndicatorProps> = (props) => {
  const seconds = totalSeconds - props.elapsedSeconds - initialSeconds;
  const date = moment().startOf("day").seconds(seconds);

  return (
    <div className="indicator-countdown">Il vous reste {getText(date)}</div>
  );
};

const ProgressBarTimer: FunctionComponent = () => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [progress, setProgress] = useState(initialProgress);
  const { timeOver, startGame, finishGame, handleMessage } =
    useContext(StoreContext);

  const roundProgress = (progress: number) => {
    const factor = Math.pow(10, 2);
    return Math.round(progress * factor) / factor;
  };

  const handleTimer = (elapsedSeconds: number) => {
    if (progress <= 99 && startGame && !finishGame()) {
      const progress = roundProgress(
        ((elapsedSeconds + initialSeconds) / totalSeconds) * 100
      );
      setProgress(progress);
      setElapsedSeconds(elapsedSeconds);
    } else if (progress > 99 && !finishGame()) {
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
          strokeColor="#2320e5"
          trackStrokeWidth={3}
          trackStrokeColor="#e6e6e6"
          pointerRadius={5}
          pointerStrokeWidth={2}
          pointerStrokeColor="#2320e5"
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
