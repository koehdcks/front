const d1 = document.getElementById("d1");
const btn = document.getElementById("btn");
const h1s = document.getElementsByTagName("h1");
const btn2 = document.getElementById("btn2");
const u1 = document.getElementById("u1");

btn2.addEventListener("click",function(){
    let li = document.createElement("li");
    let t = document.createTextNode("add");
    li.appendChild(t);
    u1.append(li);    
});

btn.addEventListener("click",function(){
    // d1.innerHTML='<input type="button" value="BUTTON" id="b1">';
    let b = document.createElement("input");
    let t = document.createAttribute("type");
    t.value="button";
    b.setAttributeNode(t);
    t = document.createAttribute("value");
    t.value="BUTTON";
    b.setAttributeNode(t);
    t = document.createAttribute("id");
    t.value="b1";
    b.setAttributeNode(t);
    d1.appendChild(b);
});

// b1.addEventListener("click",function(){
//     alert("b1");
// });

d1.addEventListener("click",function(event){
    alert("d1");
    console.log(event.target);
    //event.target => .getElementById();
    if(event.target.id=="b1"){
        alert("button");
    }
});

// for(let i=0;i<h1s.length;i++){
//     h1s[i].addEventListener("click",function(event){
//         alert("h1");
//         console.log("event :",event);
        
//     });
// }