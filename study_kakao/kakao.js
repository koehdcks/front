const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
const search = document.getElementById("search");
const btn = document.getElementById("btn");
let xl = 33.450701;
let yl = 126.570667;

getMap(xl, yl);

const dv = document.getElementById("dv");
let query = "";


btn.addEventListener("click",function(){
    query = search.value;
    dv.innerHTML="";
    fetch("https://dapi.kakao.com/v2/local/search/address.json?query=" + query, {
        method: 'get',
        headers: {
            "Authorization": "KakaoAK 3a4a5ffceeacd540bf80b1cafb642fe8"
        }
    })
        .then((response) => { return response.json() })
        .then((r) => {
            for (a of r.documents) {
                let dvc = document.createElement("div");
                let atb = document.createAttribute("data-x");
                atb.value = a.x;
                dvc.setAttributeNode(atb);
                atb = document.createAttribute("data-y");
                atb.value = a.y;
                dvc.setAttributeNode(atb);
                dvc.innerHTML = a.address_name;

                atb = document.createAttribute("class");
                atb.value = "c1";
                dvc.setAttributeNode(atb);

                dv.append(dvc);
            }
        })
})


dv.addEventListener("click", function (event) {
    if (event.target.classList.contains("c1")) {
        let x = event.target.getAttribute("data-x");
        let y = event.target.getAttribute("data-y")
        alert("x : " + y + "   y : " + x)
        xl = y;
        yl = x;
        getMap(xl, yl);
    }


})



function getMap(xl, yl) {
    let options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(xl, yl), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    // 마커가 표시될 위치입니다 
    let markerPosition  = new kakao.maps.LatLng(xl, yl);
    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
    position: markerPosition
    });
    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);


}

// function searchMap() {
//     fetch("https://dapi.kakao.com/v2/local/search/address.json?query=" + query, {
//         method: 'get',
//         headers: {
//             "Authorization": "KakaoAK 3a4a5ffceeacd540bf80b1cafb642fe8"
//         }
//     })
//         .then((response) => { return response.json() })
//         .then((r) => {
//             for (a of r.documents) {
//                 let dvc = document.createElement("div");
//                 let atb = document.createAttribute("data-x");
//                 atb.value = a.x;
//                 dvc.setAttributeNode(atb);
//                 atb = document.createAttribute("data-y");
//                 atb.value = a.y;
//                 dvc.setAttributeNode(atb);
//                 dvc.innerHTML = a.address_name;

//                 atb = document.createAttribute("class");
//                 atb.value = "c1";
//                 dvc.setAttributeNode(atb);

//                 dv.append(dvc);
//             }
//         })
// };