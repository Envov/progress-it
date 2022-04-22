
<p align="center">
<br>
    <img src="https://i.loli.net/2021/09/22/v3jEtF8lnhPGgKz.gif" alt="Logo">
    <h3 align="center">
        Realy simple fake progress
        <br>
        Create any progress-bar you like use functional api
        <br/>
        <a href="https://envov.github.io/progress-it/">
            Preview
        </a>
        |
        <a href="https://github.com/Envov/progress-it/blob/master/example/index.html">
            Example
        </a>
    </h3>
</p>

# start
```shell
yarn add progress-it 
or
npm install progress-it
```

```javascript
import progress from "progress-it"
const effect=console.log
const stateSetter = progress(effect)(false);
const finish=()=>stateSetter(true)
const fail=()=>stateSetter('fail')
setTimeout(finish,1000)
```
### output  
```shell
0.0000001 false
0.0000002 false
0.0000004 false
...
0.9999999 false
# after 1000ms 
1 true
```
# api
```typescript
type Effect = (percent: number, state: boolean | 'fail') => void;
interface IProgressPotions {
    interval: number;//default 100
    speed: number; //default 0.01
}
type Setter=(newState: boolean | 'fail')=>Setter
const progress: (effect: Effect, option: Partial<IProgressPotions>) => (initState: boolean) => (newState: boolean) => Setter;
const stateSetter:Setter = progress(effect)(false);
```
