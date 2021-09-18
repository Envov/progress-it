export declare const ifElse: (fn1: (x: boolean) => boolean, fn2: (x: boolean) => any, fn3: (x: boolean) => any) => (x: boolean) => any;
export declare type Effect = (percent: number, state: boolean) => void;
export interface IProgressPotions {
    percent: number;
    interval: number;
    speed: number;
    timeLine: number;
    timer: number | undefined;
}
declare const progress: (effect: Effect) => (state: boolean, option: Partial<IProgressPotions>) => (newState: boolean) => any;
export default progress;
