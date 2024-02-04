// console.log("JavaScript file is connected!");

// function checkVisibility() {
//   var nameElement = document.getElementById('name');
//   var headerElement = document.getElementById('header');
  
//   // Check if headerElement exists
//   if (headerElement) {
//     var rect = headerElement.getBoundingClientRect();
//     var isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    
//     if (isVisible) {
//       nameElement.style.opacity = "0";
//     } else {
//       nameElement.style.opacity = "1";
//     }
//   } else {
//     // If headerElement doesn't exist, always show nameElement
//     nameElement.style.opacity = "1";
//   }
// }


// window.addEventListener('scroll', checkVisibility);
// window.addEventListener('load', checkVisibility);


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
    var ul = x.getElementsByTagName("ul")[0];
    var children = Array.from(ul.children);
    var firstChild = children.shift(); // Remove the first child from the array
    children.reverse().forEach(child => ul.appendChild(child));
  } else {
    x.className = "topnav";
    var ul = x.getElementsByTagName("ul")[0];
    var children = Array.from(ul.children);
    var firstChild = children.shift(); // Remove the first child from the array
    children.reverse().forEach(child => ul.appendChild(child));
  }
}



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel__image");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}