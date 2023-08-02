const cb=document.getElementsByClassName("cb");
const btn=document.getElementById("btn");


if(cb[0].checked){
    for(let i=1;i<cb.length;i++){
        cb[i].checked=true;
    }
}

cb[0].addEventListener("change",function(){
    if(cb[0].checked){
        for(let i=1;i<cb.length;i++){
            cb[i].checked=true;
        }
    }
});
