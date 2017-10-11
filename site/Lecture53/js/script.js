console.log(document.querySelector("#name"));
document.g
var 

function sayHello () {
  
    var name = document.querySelector("#name").value;
    document.querySelector("#content").innerHTML = 
    "<h2>HELLO " + name + "!</h2>";
    if (name === "student") {
      var title = document.querySelector("#title").textContent;
      title += ", assface";
      document.querySelector("#title").textContent = title;
    }

};