const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
let [w,n] = input[0].split(' ').map(Number)

const data = []

for(let i = 1; i<=n; i++){
    data.push(input[i].split(' ').map(Number))
}
data.sort((a,b)=>b[1]-a[1])

let answer = 0;
let i = 0;
while(w>0){
    let [m,p] = data[i]
    if(w>=m){
        w -= m
        answer += m*p
        i+=1
    }else{
        answer += w * p
        w = 0
        break;
    }
}

console.log(answer)