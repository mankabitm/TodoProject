$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropogation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var text=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>");
	}
})

$(".fa-th-list").click("click",function(){
	$("input[type='text']").fadeToggle();
});