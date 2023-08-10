

$('#all').click(function(){
    let c = $("#all").prop("checked")
    
    $('.checks').each(function(i,e){
        $(e).prop("checked",c)
    })
    
})

// $('.checks').each(function(i,e){
//     $(e).click(function(){
//        let c = $(e).prop("checked")
//        $('#all').prop("checked",c)
//     })
// })

$('.checks').click(function(){
    let result = true;
    $('.checks').each(function(i,e){
        if(!$(e).prop("checked")){
            result = false;
            return false;
        }
    })
    $('#all').prop("checked",result)
})

$('#btn').click(()=>{
    // let i = document.createElement("input")
    // let a = document.createAttribute("type")
    // a.value="text"
    // i.setAttributeNode(a);
    // $('#d1').append(i);

    let r = "<div>";
    r = r+'<input type="text">'
    r= r+'<button class="d">click</button>'
    r= r+'</div>'

    $('#d1').append(r)
})

$('#del').click(()=>{
    $('#d1').empty();
})

//선택자.이벤트명()
//선택자.on("이벤트명",자식선택자,콜백함수)
//선택자.on({})
// $('#d1').on({
//     "click":function(){},
//     "blur":function(){},
//     ...
// })
$('#d1').on("click",".d",function(){
    $(this).parent().remove()
})