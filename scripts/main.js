var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Famili1.jpg') {
      myImage.setAttribute ('src','images/Famili2.jpg');
    } else {
      myImage.setAttribute ('src','images/Famili1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'СЕМЬЯ ВАЛЕЖНЫХ, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'СЕМЬЯ ВАЛЕЖНЫХ, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}