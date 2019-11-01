$(function(){$("#myDIV").hide(),$("#myDIV").on("load",function(){$("#myDIV, #div2").hide()})}),$(function(){$("#myDIV").hide(),$(".addmore").on("click",function(){$("#myDIV, #div2").show()})});var rowNum=0;function startCarousel(t){var e=1,i=$(t).find("img");$(i[0]).show(),setInterval(function(){$(i).hide(),$(i[e]).show(),e===i.length-1?e=0:e++},3e3)}$("body").on("click",".addmore",function(){var t=$("<div id='address-"+ ++rowNum+"' class='address' />"),e=$("<div class='spaceOntheBottem'><div class='around'><div class='street'><a href=HtmlOne.html><img src='images/adult-black-suit-dark-background-1.jpg' alt='my img'/></a><a href='#'><div class='circleBlackInBox'></div><a href='#'><div class='circleGreyInBox'> </div></a><a href='#'><div class='circleNavyInBox'></div></a></div></a><div class='words-in-box'>  New York classic fit solid stretch wool suit  $695.00 </div><div class='stars'><div class='fa fa-star checked'></div ><div class='fa fa-star checked'></div><div class='fa fa-star checked'></div ><div class='fa fa-star'></div ><div class='fa fa-star'></div ></div></div></div>");$("body").append(t),e.appendTo(".onTheBottem2")}),startCarousel("#left-carousel"),startCarousel("#right-carousel");var z=1;function switchImg4(){1==z&&(document.getElementById("imgToSwitch6").src="https://i.imgsafe.org/af/afbc1c03a6.jpeg",z++),2==z&&(document.getElementById("imgToSwitch7").src="https://i.imgsafe.org/af/afd17a626c.png",z++),3==z&&(document.getElementById("imgToSwitch8").src="https://i.imgsafe.org/af/afd179666a.png",z=1)}z=1;function switchImg5(){1==z&&(document.getElementById("imgToSwitch6").src="https://i.imgsafe.org/af/afb7473f69.jpeg",z++),2==z&&(document.getElementById("imgToSwitch7").src="https://i.imgsafe.org/af/afa978aeb7.png",z++),3==z&&(document.getElementById("imgToSwitch8").src="https://i.imgsafe.org/af/afa9adb4dd.png",z=1)}z=1;function switchImg6(){1==z&&(document.getElementById("imgToSwitch6").src="images/building-businessman-fashion-999267 - Copy (2).jpg",z++),2==z&&(document.getElementById("imgToSwitch7").src="images/capture.PNG",z++),3==z&&(document.getElementById("imgToSwitch8").src="images/capturetwo.PNG",z=1)}z=1;function switchImg1(){1==z&&(document.getElementById("imgToSwitch1").src="https://i.imgsafe.org/af/afbc1c03a6.jpeg",z++),2==z&&(document.getElementById("imgToSwitch2").src="https://i.imgsafe.org/af/afd179666a.png",z++),3==z&&(document.getElementById("imgToSwitch3").src="https://i.imgsafe.org/af/afd17a626c.png",z=1)}z=1;function switchImg2(){1==z&&(document.getElementById("imgToSwitch1").src="https://i.imgsafe.org/af/afb7473f69.jpeg",z++),2==z&&(document.getElementById("imgToSwitch2").src="https://i.imgsafe.org/af/afa978aeb7.png",z++),3==z&&(document.getElementById("imgToSwitch3").src="https://i.imgsafe.org/af/afa9adb4dd.png",z=1)}

// Black
//when user selects a color only show images with the selected color.
var z = 1; //initializes counter
function switchImg4() {
  if (z == 1) { //if the counter is at 1
    document.getElementById("imgToSwitch6").src = "https://i.imgsafe.org/af/afbc1c03a6.jpeg";
    z++; //increments the counter to 2
  } if (z == 2) { //if this is the 2nd click
    document.getElementById("imgToSwitch7").src = "https://i.imgsafe.org/af/afd179666a.png";
    z++; //increments counter to 3
  } if (z == 3) { //if the counter is 3
    document.getElementById("imgToSwitch8").src = "https://i.imgsafe.org/af/afd17a626c.png";
z = 1; //resets counter to 1
  }
}

// Grey
//when user selects a color only show images with the selected color.
var z = 1; //initializes counter
function switchImg5() {
  if (z == 1) { //if the counter is at 1
    document.getElementById("imgToSwitch6").src = "https://i.imgsafe.org/af/afb7473f69.jpeg";
    z++; //increments the counter to 2
  } if (z == 2) { //if this is the 2nd click
    document.getElementById("imgToSwitch7").src = "https://i.imgsafe.org/af/afa978aeb7.png";
    z++; //increments counter to 3
  } if (z == 3) { //if the counter is 3
    document.getElementById("imgToSwitch8").src = "https://i.imgsafe.org/af/afa9adb4dd.png";
z = 1; //resets counter to 1
  }
}

// Blue
//when user selects a color only show images with the selected color.
var z = 1; //initializes counter
function switchImg6() {
  if (z == 1) { //if the counter is at 1
    document.getElementById("imgToSwitch6").src = "images/building-businessman-fashion-999267 - Copy (2).jpg";
    z++; //increments the counter to 2
  } if (z == 2) { //if this is the 2nd click
    document.getElementById("imgToSwitch7").src = "images/capture.PNG";
    z++; //increments counter to 3
  } if (z == 3) { //if the counter is 3
    document.getElementById("imgToSwitch8").src = "images/capturetwo.PNG";
z = 1; //resets counter to 1
  }
}

// ------------------------------------------------------------------------------------------

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown-3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn-3')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$("button").on("click", function() {
  var el = $(this);
  if (el.text() == el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
    {document.getElementById("textSwap").style.height = "95px";
  }
// {var element = document.getElementById('textSwap');
//   element.style.height = null; }
  // $(document).on("click", function(){
  //   $("#textSwap")element.style.removeProperty("height");
  // });

});

$(document).ready(function() {
  $('.imgToSwitch3').click(function(){
    var idimg = $(this).attr('id');
    var srcimg = $(this).attr('src');
    alert('ID is: '+ idimg+ '\n SRC: '+ srcimg  );
    $(".img4").attr('src',srcimg);
  });
});

// Blue
//when user selects a color only show images with the selected color.
var z = 1; //initializes counter
function switchImg3() {
  if (z == 1) { //if the counter is at 1
    document.getElementById("imgToSwitch1").src = "images/building-businessman-fashion-999267 - Copy (2).jpg";
    z++; //increments the counter to 2
  } if (z == 2) { //if this is the 2nd click
    document.getElementById("imgToSwitch2").src = "images/capture.PNG";
    z++; //increments counter to 3
  } if (z == 3) { //if the counter is 3
    document.getElementById("imgToSwitch3").src = "images/capturetwo.PNG";
z = 1; //resets counter to 1
  }
}
