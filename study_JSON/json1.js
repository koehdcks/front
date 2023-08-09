let text='{"k1":"abc","k2":2}';

let j = JSON.parse(text);

console.log(j);
alert(j);

console.log(j.k1);
console.log(j.k2+3);

text='[{"k1":"abc","k2":2},{"k1":"efg","k2":7}]';

j = JSON.parse(text);

console.log(j[0]);

for(a of j){
    console.log(a.k2+10)
}

text = '{"f1":[{"k1":"abc","k2":2},{"k1":"efg","k2":7}]}'
j=JSON.parse(text);

console.log(typeof j);

j = JSON.stringify(j);

console.log(typeof j);

