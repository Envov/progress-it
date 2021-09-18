## 🤞🏻map  anything as  floating number 
```javascript
import progress from "progress-it"
const stateSet = progress(console.log)(false);
setTimeout(()=>stateSet(true),1000)
```
#### output
```shell
0.09090909090909094 false
0.16666666666666663 false
0.23076923076923084 false
0.2857142857142857 false
0.33333333333333337 false
0.375 false
0.41176470588235303 false
0.4444444444444444 false
0.4736842105263158 false
1 true
```

