function f1(){
    alert('click');
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let input1 = document.getElementById("input1");

input1.addEventListener("keyup",function(){
    console.log("입력");
});

//event 등록 2
btn1.onclick = function(){
    f1();
};

//event 등록 3
btn2.addEventListener("click",function(){
    let check=confirm("확인해주세요");
    console.log(check);
})


