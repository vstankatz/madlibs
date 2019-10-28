$(document).ready(function() {
  $("#form1").submit(function(event) {
    var blanks = ["noun1", "verb", "name", "object", "noun2", "adjective","exclamation", "color"];

    blanks.forEach(function(blank) {
      var userInput = $('input#' + blank).val();
      $('.' + blank).text(userInput);
    });


  $("#story").show();

  event.preventDefault();

});
});
