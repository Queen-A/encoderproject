var letters = {
  64: "z",
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
  91: "a",
}
//creating a object that changer the numbes to letters

$("#inputArea").keydown(function (e) {

  if($("input:checked").val() == "echo") {
    $('#textArea').append(letters[e.keyCode]);
  }
  //allowing the echoing text to work only when the echo button is clicked
  else if ($("input:checked").val() == "caesar cipher") {
    $('#textArea').append(letters[e.keyCode -1]);
  }
  //implementing the caesar cipher in order to display the caesar cipher on the website
  else if($("input:checked").val() == "heiroglyphics") {
      $('#textArea').append("<img src= 'images/heiroglyphics/" + letters[e.keyCode] + ".gif'>");
  }
  //implementing heiroglyphics into the code in pder to show the heiroglyphics
  else if($("input:checked").val() == "runes") {
      $('#textArea').append("<img src= 'images/runes/" + letters[e.keyCode] + ".gif'>");
  }
//implementing runes into the code in pder to show the runes on the website
});


$("input[type='radio']").click(function() {
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true)
})
//Allowing a user to move each of the buttons
var messageToDecode;

$("#translationInputArea").keydown(function (e) {
  if (e.keyCode == 13) {

    messageToDecode = $("#translationInputText").val()
    var messageArray = messageToDecode.split("")

    for (var i = 0; i < messageArray.length; i++) {
      //messageArray[i]

    var translatedNumber = messageArray[i].charCodeAt(0)-32 + 1;
    $('#translationArea').append(letters[translatedNumber]);
    }
  }
});
