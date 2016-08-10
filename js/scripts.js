$(function() {
  $("#blanks form").submit(function(event) {
    var person1 = $("#person1").val();
    $(".person1").text(person1);
    var person2 = $("#person2").val();
    $(".person2").text(person2);
    var a = $("#animal").val();
    $(".animal").text(a);
    var e = $("#exclamation").val();
    $(".exclamation").text(e);
    var v = $("#verb").val();
    $(".verb").text(v);
    var n= $("#noun").val();
    $(".noun").text(n);


    $("#story").show();
    event.preventDefault();
  });

 $("#upForm form").submit(function(event){

   var secret = $("#secret").val();

   $(".theSecret").text(secret.toUpperCase());


   $(".hideMe").show();
   event.preventDefault();

 });

//For file uppercaseIt.html

});
