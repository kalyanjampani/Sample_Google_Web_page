

let a = "abcab"

let b = a.split("");

let h = [];

for (let i of b){
    if(b.indexOf(i)===b.lastIndexOf(i)){
        h.push(i)
    }
}
console.log(...h)