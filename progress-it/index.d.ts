declare type Effect = (percent: number, state: boolean | 'fail') => void;
declare type Setter = (newState: boolean | 'fail') => Setter;
declare type progress = (effect: Effect, option: Partial<IProgressPotions>) => (initState: boolean) => (newState: boolean) => Setter;
interface IProgressPotions {
    percent: number;
    interval: number;
    speed: number;
    timeLine: number;
    timer: number | undefined;
}
declare const progress: progress;
export default progress;
