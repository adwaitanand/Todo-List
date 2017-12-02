//we need to use the on function to add listners because it will not add listener to the dynamically created li's
//its not about changing click to on, the syntax shows that listener is being added to the entire ul but the function will execute when li is clicked

$("ul").on("click","li",function(){

	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(600,function(){
		$(this).remove();//reason for writing in callback bcs it is executed after fadeout
	});
	//parent() gives the refrence of the parent element of the selected object, hence here li is selected it fades out and then removed
	event.stopPropagation();//used to stop the bubling up of events, in this case li listner should not be executed if span is clicked
	
});


$("input[type='text']").keypress(function(event){
	//enter key code is 13 so to check wether enter is pressed comparison is done
	if(event.which===13)
	{
		//take the text entered
		var todoText=$(this).val();
		$(this).val("")
		//append method is used to create li in the todo list ,apend actually adds the html content to the selected item
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+todoText+"</li>");//as there is only one ul it selects it and appends the li
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(100);
});