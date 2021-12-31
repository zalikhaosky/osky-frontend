var socialmed = document.getElementById('socmed');
var socialmedchild = document.querySelector(".socmedchild");
var socialmedchildlength = document.querySelectorAll(".socmedchild").length;
var i = 0;

while(i != socialmedchildlength){
  //console.log(i + ' is great!');

  socialmed.getElementsByClassName('socmedchild')[i].addEventListener('click',function(){
    return confirmation();

  });

  i++;

}

function confirmation() {
  let text = "Are you sure wants to navigate to different domain?";
  if(confirm(text) == true){
    return true;
  }else{
    event.preventDefault();
  }
 
}


/***********************************/


console.log("ok");

const links = document.querySelectorAll(".navbar-link .btn-dropdown");
const dropdown = document.querySelectorAll(".navbar-link .submenu");

dropdown.forEach((element) => {
  const height = element.offsetHeight;
  element.style.marginTop = `${-height}px`;
});

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = e.currentTarget;
    const ele = target.nextElementSibling;

    dropdown.forEach((element) => {
      if (element !== ele) {
        element.previousElementSibling.classList.remove("active");
        element.classList.remove("dropdown");
      }
    });
    target.classList.toggle("active");
    ele.classList.toggle("dropdown");
  });


  var elements = document.getElementsByClassName('exit-btt');

  for(var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.onclick = function(e) {
          const target = e.currentTarget;
          const ele = target.nextElementSibling;

          dropdown.forEach((element) => {
            if (element !== ele) {
              element.previousElementSibling.classList.remove("active");
              element.classList.remove("dropdown");
            }else{
              target.classList.toggle("active");
              ele.classList.toggle("dropdown");
            }
          });
          

        
      }

      

  }

});


var classclose = document.querySelector(".submenu");
var classactive = document.querySelector(".btn-dropdown");

document.addEventListener("click", function(event) {
  
  if (event.target.closest('.navbar-link')) return;
      classclose.classList.remove("dropdown");
      classactive.classList.remove("active");
      console.log("success");
  
    
});


var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});