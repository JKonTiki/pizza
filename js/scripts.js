

var toppings = [];





$(document).ready(function() {

  $("#order").submit(function(event){
    event.preventDefault();
    // debugger

    var size = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    console.log(size);
    console.log(toppings);
  });

  $("button#gratzie").click(function() {
    // location.reload();
  });
});
