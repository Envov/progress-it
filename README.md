## 🤞🏻map  boolean as  floating number 
<p align="center">
<br>
    <img src="https://i.loli.net/2021/09/22/xOlca5ZnTYWMbvV.png" alt="Logo" width="500">
    <h3 align="center">
        <a href="https://uilkunp.github.io/progress-it/">
            example
        </a>
    </h3>
</p>

```shell
yarn add progress-it 
or
npm install progress-it
```

```javascript
import progress from "progress-it"
const effect=console.log
const stateSetter = progress(effect)(false);
const finish=(set=>()=>set(true))(stateSetter)
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

