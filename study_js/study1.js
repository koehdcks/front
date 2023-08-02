//자바는 문자열 "" 문자 ''
//JS "" or ''

console.log('hello');

let n1=1;
let n2='1';

console.log(n1==n2);
console.log(n1===n2);
console.log(n1+n2);//11
console.log(n1*n2);//1
console.log(n1!=n2);
console.log(n1!==n2);
console.log(typeof n1);
console.log(typeof n2);


let ar = [1,2,3];

for(let i=0;i<3;i++){
    console.log(ar[i]);
}



for(n of ar){
    console.log(n);
}

console.log('============================');

ar = [];
ar.push('a');
ar.push(2);
ar.push(false);

let result = ar.pop();
console.log(result);

for(n of ar){
    console.log(n);
}

console.log('====================');
ar.forEach(function(v,i,ar){ 
    console.log(v);
    console.log(i);
});
