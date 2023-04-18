let str = "hello rikkei academy";
let a = [];
a = str.split(" ");
let b = [], tmp;
let j = "";
for (let i = 0; i < a.length; i++) {
    tmp = a[i].trim().toLocaleLowerCase();
    j = a[i][0].toUpperCase() + a[i].slice(1);
    b[i] = j;
}
str = b.join(" ");
console.log(str);
