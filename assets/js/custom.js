$("ul").on("click","li",function(){
$(this).toggleClass("completed")
});
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
$(this).remove();});
});
$(".fa-plus-square").click(function(){
if($("input[type='text']").val() !== ''){
var inputvalue=$("input[type='text']").val();
$("ul").append("<li><input type='checkbox' id='checkBox'>"+ inputvalue +"<span><i class='fa fa-trash-o' aria-hidden='true'></i></span></li>");
$("input[type='text']").val("");}
else {swal("Başlık Gir", "Çıkmak için butona basınız!", "error");}
});
    $("input[type='text']").keypress(function(event) {
        if (event.keyCode == 13) {
            if($("input[type='text']").val() !== ''){
			var inputvalue=$("input[type='text']").val();
			$("ul").append("<li><input type='checkbox' id='checkBox'>"+ inputvalue +"<span><i class='fa fa-trash-o' aria-hidden='true'></i></span></li>");
			$("input[type='text']").val("");}
			else {swal("Başlık Gir", "Çıkmak için butona basınız!", "error");}
        }
    });
$(".fa-pencil-square-o").click(function(){
$("input[type='text']").fadeToggle()
$(".fa-plus-square").fadeToggle()
});
