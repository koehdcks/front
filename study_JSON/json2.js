const pds = document.getElementById("pds");
//<div class="mb-5" id="pds">
// <div class="text-center">
//     <img src="" class="d-block mb-3">
//     <h3 class="font-alt">TITLE</h3>
//     <p class="text-muted mb-0">description</p>
// </div>
//</div>
let url = "https://dummyjson.com/products?skip=10&limit=10";

fetch(url, { method: 'get' })
    .then((response) => { return response.json() })
    .then((r) => {
        for (p of r.products) {
            let d1 = document.createElement("div");
            let atb = document.createAttribute("class");
            atb.value ="mb-5"
            d1.setAttributeNode(atb);

            let dv = document.createElement("div");
            atb = document.createAttribute("class");
            atb.value = "text-center";
            dv.setAttributeNode(atb);

            let ch = document.createElement("img");
            atb = document.createAttribute("src")
            atb.value = p.images[0];
            ch.setAttributeNode(atb);
            atb = document.createAttribute("class");
            atb.value = "d-block mb-3";
            ch.setAttributeNode(atb);
            dv.appendChild(ch);

            ch = document.createElement("h3");
            atb = document.createAttribute("class");
            atb.value = "font-alt";
            ch.setAttributeNode(atb);
            ch.innerText = p.title;
            dv.appendChild(ch);

            ch = document.createElement("p");
            atb = document.createAttribute("class");
            atb.value = "text-muted mb-0";
            ch.setAttributeNode(atb);
            ch.innerText = p.description;
            dv.appendChild(ch);

            d1.appendChild(dv);

            pds.append(d1);
        }
    })


