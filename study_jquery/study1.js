// const id1 = document.getElementById("id1");
// const btn = document.querySelector("#btn");
// const result = document.querySelector("#result");
// const btns = document.getElementsByClassName("btns");

// for(b of btns){
//     b.addEventListener("click",function(){
//         let n = this.getAttribute("data-nums")
//         console.log(n);
//     })
// }


// btn.addEventListener("click",function(){
//     result.innerHTML=id1.value;
// })

//jquery 문법
//선택자는 css 선택자와 같음
// $('선택자').함수호출()

$('#btn').click(function(){
    let v = $('#id1').val();
    let n = $('#id1').attr('data-num');
    $('#result').html(v);
});

// $('#id1').blur(function(){
//     alert("blur");
// });

$('#btn2').click(()=>{
    console.log($('#p').html());
    console.log($('#p').text());
});

$('.btns').click(function(){
    let n = $(this).attr("data-nums");
    console.log(n);
});

$('#btn3').click(()=>{
    $('.c2').each((i,e)=>{
        console.log("Index: ",i)
        console.log("Element: ",$(e).html())
    })
});
