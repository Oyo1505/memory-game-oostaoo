export interface Todo {
    name: string;
}
export interface CardInterface {
    id: number;
    image: string;
    name: string;
}
 export  interface IndicatorProps {
    progress: number;
    elapsedSeconds: number;
}

export  interface PointsInterface {
    name: string;
    points : number;
}
export interface TimerProps {
    initialSeconds: number;
    totalSeconds: number;
    onChange?: (value: number) => void;
    interval: number;
  }