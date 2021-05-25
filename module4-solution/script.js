(function () {

  var namesList = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < namesList.length; i++) {
    var firstLetter = namesList[i].charAt(0).toLowerCase();
  
    if (firstLetter === 'j') {
      byeSpeaker(namesList[i]);
    }
    else {
      helloSpeaker(namesList[i]);
    }
  }
  
  })();