//참조변수명.메서드명

window.alert("쉬는 시간 입니다...");

//window 생략가능
alert("hello");
// location.href="https://www.naver.com";

let d1 = window.document.getElementById("d1");
let d2 = document.getElementById("d2");
let c2 = document.getElementsByClassName("c2");

let contents = d1.innerHTML;

console.log(contents);

d1.innerHTML="Hello";

contents = d2.innerHTML;
console.log(contents);
// d2.innerHTML = '<input type="file">';

console.log(c2);
console.log("========================");
for(let i=0;i<c2.length;i++){
    console.log(c2[i].innerHTML);
}