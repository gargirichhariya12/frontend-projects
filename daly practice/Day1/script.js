var btn = document.querySelector("button");
var main = document.querySelector("main");

var arr = ['hii', 'bye', 'see u', 'mention not ', 'good bye']

btn.addEventListener("click", () => {
//   var div = document.createElement("div");

//   div.style.height = "50px";
//   div.style.width = "50px";
//   div.style.position = "absolute";
  
//   var x = Math.random() * 100;
//   var y = Math.random() * 100;
//   var c1 = Math.floor(Math.random() * 256);
//   var c2 = Math.floor(Math.random() * 256);
//   var c3 = Math.floor(Math.random() * 256);
  
//   div.style.top = x + "%";
//   div.style.left = y + "%";
//   div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;

//   main.appendChild(div);




var h1 = document.createElement('h1')

var a = Math.floor(Math.random() * arr.length)

var sca = Math.random() * 3
var x = Math.random() * 100
var y = Math.random() * 100
h1.style.position = "absolute";
h1.style.color = "white";
h1.style.top = x  + '%'
h1.style.left = y + '%'
h1.style.scale = sca

h1.innerHTML = arr[a]
main.appendChild(h1)

});
