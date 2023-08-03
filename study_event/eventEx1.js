// const cb=document.getElementsByClassName("cb");
// const btn=document.getElementById("btn");


// cb[0].addEventListener("click",function(){
//     if(cb[0].checked){
//         for(let i=1;i<cb.length;i++){
//             cb[i].checked=true;
//         }
//     }else{
//         for(let i=1;i<cb.length;i++){
//             cb[i].checked=false;
//         }
//     }
    
// });

// for(let i=1;i<cb.length;i++){
//     cb[i].addEventListener("click",function(){
//         if(cb[i].checked==false){
//             cb[0].checked=false;
//         }
//         if(cb[1].checked&cb[2].checked&cb[3].checked&cb[4].checked){
//             cb[0].checked=true;
//         }
//     })
// };

// btn.addEventListener("click",function(){
//     if(cb[1].checked&cb[2].checked&cb[3].checked&cb[4].checked){
//         alert("회원가입");
//     }else{
//         alert("동의하세요");
//     }
// });
const checkAll=document.getElementById("checkAll");
const check=document.getElementsByClassName("check");
const checks=document.getElementsByClassName("checks");
const btn=document.getElementById("btn");

checkAll.addEventListener("click",function(){
    for(c of check){
        c.checked=checkAll.checked;
    }
});

for(c of checks){
    c.addEventListener("click",function(){
        let result=true;
        for(ch of checks){
            if(!ch.checked){
                result=ch.checked;
                break;
            }
        }
        checkAll.checked=result;
    })
};

btn.addEventListener("click",function(){
    if(checkAll.checked){
        alert("회원가입");
    }else{
        alert("필수약관에 동의하세요")
    }

});

// checkAll.addEventListener("click",function(){
//     for(let i=0;i<check.length;i++){
//         check[i].checked=checkAll.checked;
//     }
// });

// for(let i=0;i<check.length;i++){
//     check[i].addEventListener("click",function(){
//         let result=true;
//         for(let j=0;j<check.length-2;j++){
//             if(!check[j].checked){
//                 result=check[j].checked;
//                 break;
//             }
//         }
//         checkAll.checked=result;
//     })
// };

