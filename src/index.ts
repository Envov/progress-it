const ifElse =
  (fn1: (x: boolean) => boolean, fn2: (x: boolean) => any, fn3: (x: boolean) => any) =>
    (x: boolean) =>
      fn1(x) ? fn2(x) : fn3(x);
type Effect = (percent: number, state: boolean|'fail') => void;
interface IProgressPotions {
  percent: number;
  interval: number;
  speed: number;
  timeLine: number;
  timer: number | undefined;
}
export const progress = (effect: Effect, option: Partial<IProgressPotions>) => (state: boolean) => {
  const $data: IProgressPotions = {
    percent: 0,
    interval: 100,
    speed: 0.01,
    ...option,
    timeLine: 0,
    timer: undefined
  }

  // get timer or effect's returns
  const $stateInitFlow = ($data: IProgressPotions) =>
    ifElse(
      (state) => Boolean(state),
      (state) => effect(1, state),
      (state) =>
        setInterval(() => {
          $data.timeLine++
          $data.percent = state ? 1.0 : (-1 / ($data.speed * $data.timeLine + 1) + 1) * 1;
          effect($data.percent, state);
        }, $data.interval)
    )
  // begging ..
  $data.timer = $stateInitFlow($data)(state);
  const setter = (newState: boolean) => {
    //no a boolean, callback with fail
    if ((typeof newState) !== 'boolean'){
      $data.timer && clearInterval($data.timer);
      $data.percent = 1;
      effect($data.percent, "fail");
      return setter
    }
    if (newState) {
      $data.timer && clearInterval($data.timer);
      $data.percent = 1;
      effect($data.percent, newState);
    }else{
      return setter;
    }
  }
  return setter;
};


