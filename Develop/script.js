$(".btn").on("click",function(){
    var id = $(this).attr("id").split("-")[0]
    var plan = $("#"+ id +"-txt").val()
    console.log(id, plan)
    localStorage.setItem(id, plan)
})

for (let i = 8; i < 19; i++) {
var chose = localStorage.getItem(i)
$("#"+ i + "-txt").val(chose)
}