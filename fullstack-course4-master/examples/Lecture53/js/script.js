function sayHello () {
  var name =
   document.getElementById("name").value;
   var message = "<h2>Hello " + name + "!</h2>";

  document
    .getElementById("content")
    .innerHTML = message;

  if (name === "student") {
    var title = 
      document
        .querySelector("#title")
        .textContent;
    title += ", assface";
    document
        .querySelector("h1")
        .textContent = title;
  }
}

function keyPress(key) {
  if (key.key == 'Enter') {
    sayHello();
  }
};

document.querySelector("#name").addEventListener("keypress", keyPress);
document.querySelector("button").addEventListener("click", sayHello);