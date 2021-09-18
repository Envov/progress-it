## 🤞🏻map  boolean as  floating number 
```shell
yarn add progress-it 
or
npm install progress-it
```

```javascript
import progress from "progress-it"
const effect=console.log
const stateSet = progress(effect)(false);
const finish=(set=>()=>set(true))(stateSet)
setTimeout(finish,1000)
```

#### output
```shell
0.0000001 false
0.0000002 false
0.0000004 false
...
0.9999999 false
# after 1000ms 
1 true
```

