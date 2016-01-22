var pingpong = function(num) {

  var array1 = [];

  for (var i = 1; i <= num; i++) {

    if (i % 15 === 0) {
      array1[i] = "pingpong";
      array1.push[i];
    } else if (i % 5 === 0) {
        array1[i] = "pong";
        array1.push[i];
    } else if (i % 3 === 0) {
        array1[i] = "ping";
        array1.push[i];
    } else {
        array1.push(i);
    }
  };
  array1 = array1.join().replace(/,/g , " ");
  return array1;
};





$(document).ready(function(event) {
    $("form#pingpong").submit(function(event){

      var num = parseInt($("input#message1").val());
      var result = pingpong(num);

  $("#list").append("<li>" + result + "</li>");
  $("#result").show();
  event.preventDefault();

});
});