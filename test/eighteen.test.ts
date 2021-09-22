import progress from "../progress-it/index"
const effect = console.log
const stateSetter = progress(effect)(false);
const finish = () => stateSetter(true)
const fail = () => stateSetter('fail')
setTimeout(finish, 1000)