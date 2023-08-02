const input=document.getElementById("in");
const out=document.getElementById("out");
const btn=document.getElementById("btn");
const clear=document.getElementById("clear");
const p1=document.getElementById("p1");
const p2=document.getElementById("p2");
const b1=document.getElementById("b1");
const result=document.getElementById("result");
const c1=document.getElementsByClassName("c1");
const c2=document.getElementsByClassName("c2");
const ch=document.getElementsByClassName("ch");
const btn3=document.getElementById("btn3");

input.addEventListener("keyup",function(){
    let v = input.value;
    out.innerText=v;

});

btn.addEventListener("click",function(){
    if(input.type=="text"){
        input.type="file"
    }else{
        input.type="text"
    }
});

clear.addEventListener("click",function(){
    input.value="";
    out.innerText="";
});

b1.addEventListener("click",function(){
    for(c of c1){
        console.log(c.selected)
        if(c.selected){
            if(c.value=='+'){
                result.value=p1.value*1+p2.value*1;
            }else if(c.value=='-'){
                result.value=p1.value*1-p2.value*1;
            }else if(c.value=='*'){
                result.value=p1.value*p2.value;
            }else if(c.value=='/'){
                result.value=p1.value/p2.value;
            }else{
                result.value=p1.value%p2.value;
            }
            break;
        }
    }
});
// for(let i=0;i<c2.length;i++){
//     c2[i].addEventListener("click",function(){
//         console.log(c2[i].getAttribute("data-num"))
//     });
// }
for(c of c2){
    c.addEventListener("click",function(){
        console.log(this.getAttribute("data-num"));
    });
}

btn3.addEventListener("click",function(){
    ch[3].checked=true;
});

