var toppings = [];
var standard = 0;
var sizeMultiplier = 0;
var toppingCount = 0;
var priceNum = 0;

function Pizza() {
  this.size = 0;
  this.toppings = [];
}

Pizza.prototype.configurePrice = function() {
  standard = 2;
  if (this.size === "slice") {
    sizeMultiplier = 1;
  } else if (this.size === "small") {
    sizeMultiplier = 3;
  } else if (this.size === "medium") {
    sizeMultiplier = 4;
  } else if (this.size === "large") {
    sizeMultiplier = 6;
  }
  toppingCount = (this.toppings).length;
  priceNum = (standard * sizeMultiplier) + (.5 * toppingCount);
  return "$" + priceNum.toFixed(2);
};

$(document).ready(function() {

  $("#order").submit(function(event){
    event.preventDefault();
    var order1 = new Pizza;
    order1.size = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      order1.toppings.push($(this).val());
    });
    var finalPrice = order1.configurePrice();
    $(".cost").text(finalPrice);
    $("#mammaMia").hide();
    $("#response").show();
  });

  $("#size-choice").click(function() {
    $("#size-section").hide();
    $("#toppings-section").show();
  });

  $("#toppings-choice").click(function() {
    $("#toppings-section").hide();
    $("#reaction").show();
  });

  $("#whatever").click(function() {
    $("#reaction").hide();
    $("#elaboration").show();
    $("#mammaMia").show();
  });

  $("#gratzie").click(function() {

    $(".final-fade").fadeOut(5000, "linear", function() {
      location.reload()
    });

  });

});
