const cb=document.getElementsByClassName("cb");
const btn=document.getElementById("btn");


cb[0].addEventListener("click",function(){
    if(cb[0].checked){
        for(let i=1;i<cb.length;i++){
            cb[i].checked=true;
        }
    }else{
        for(let i=1;i<cb.length;i++){
            cb[i].checked=false;
        }
    }
    
});

for(let i=1;i<cb.length;i++){
    cb[i].addEventListener("click",function(){
        if(cb[i].checked==false){
            cb[0].checked=false;
        }
        if(cb[1].checked&cb[2].checked&cb[3].checked&cb[4].checked){
            cb[0].checked=true;
        }
    })
}

btn.addEventListener("click",function(){
    if(cb[1].checked&cb[2].checked&cb[3].checked&cb[4].checked){
        alert("회원가입");
    }else{
        alert("동의하세요");
    }
});

