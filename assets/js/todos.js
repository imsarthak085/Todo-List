//Check off specific todos by clicking
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click on X to delete // TODO:
$("ul").on("click","span",function(event){
  // $(this).parent().remove();
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropogation(); //stops propogation of effect of other parent elements
})

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    // var ul = $("ul").html();
    // $("ul").html(ul+"  <li><span>X</span> "+$("input").val()+"</li>");
    var todoText = $(this).val();
    $("ul").append("  <li><span><i class=\"fas fa-trash\"></i></span> " + todoText + "</li>")
    $(this).val("");
  }
})

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
