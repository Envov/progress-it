declare type Effect = (percent: number, state: boolean | 'fail') => void;
interface IProgressPotions {
    percent: number;
    interval: number;
    speed: number;
    timeLine: number;
    timer: number | undefined;
}
export declare const progress: (effect: Effect, option: Partial<IProgressPotions>) => (state: boolean) => (newState: boolean) => any | undefined;
export {};
