1  (function(window) {
    2 
    3  var obj = {};
    4
    5  obj.dreamOn = function () {
    6   console.log("I want to see the global scope! Let me out!");
    7  };
    8
    9  window.doer = obj;
    10 
    11 });
    12
    13 doer.dreamOn();