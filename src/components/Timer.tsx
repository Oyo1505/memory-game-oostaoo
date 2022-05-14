import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from "react";
import { StoreContext } from "../utils/StoreContext";

interface TimerProps {
  initialSeconds: number;
  totalSeconds: number;
  onChange?: (value: number) => void;
  interval: number;
}

const Timer: FunctionComponent<TimerProps> = ({
  initialSeconds,
  totalSeconds,
  onChange,
  interval,
}) => {
  const [elapsed, setElapsed] = useState(0);
  const [intervalId, setIntervalId] = useState<number | undefined>();
  const { startGame } = useContext(StoreContext);
  useEffect(() => {
    if (startGame) {
      start(intervalId);
    }

    return () => clear(intervalId);
  }, [startGame]);

  useEffect(() => {
    onChange?.(elapsed);
  }, [elapsed]);

  const start = (intervalId: number | undefined) => {
    clear(intervalId);

    const newIntervalId = window.setInterval(() => {
      if (elapsed + initialSeconds === totalSeconds) return;

      setElapsed((elapsed) => elapsed + 1);
      setIntervalId(newIntervalId);
    }, interval);
  };

  const clear = (intervalId: number | undefined) => {
    if (intervalId !== undefined) {
      window.clearInterval(intervalId);
    }
  };

  return null;
};

export default Timer;
