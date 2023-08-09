// const btn = document.getElementById("btn");
const btn = document.querySelector("#btn");
// const num = document.getElementsByClassName("num");
// const num = document.querySelectorAll(".num");
const num = document.querySelector("#num");
const tds = document.getElementsByClassName("tds");
const dv = document.getElementById("dv");

btn.addEventListener("click",function(){
    let url = "https://dummyjson.com/products/"+num.value;

    fetch(url,{
        method:"get",
        // mode:"no-cors",
        // headers:{
        //     'Access-Control-Allow-Origin':'*'
        // }
    })
                            // return response.text()
        .then((response)=>{return response.json()})
        .then((r)=>{
            // let j = JSON.parse(r)
            let j= [r.title,r.price,r.discountPercentage,r.rating]
            let i= 0;
            for(t of tds){
                t.innerHTML=j[i]
                i++
            }
            dv.innerHTML="";
            for(a of r.images){
                let img = document.createElement("img");
                let atb = document.createAttribute("src");
                atb.value=a;
                img.setAttributeNode(atb);
                dv.append(img);
            }            
        })
    ;
})