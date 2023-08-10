$('#btn').click(()=>{
    // $.get("https://dummyjson.com/products?skip=0&limit=1", function(result){
    //     console.log(result.products[0].title)
    // })

    // $.post("url",{param1:"값",param2:"값"},function(result){

    // })

    $.ajax({
        type:'get',
        url:"https://dummyjson.com/products",
        data:{
            skip:0,
            limit:1
        },
        success : function(result){
            console.log(result)
        },
        error:function(){
            alert("error")
        }

    })
})