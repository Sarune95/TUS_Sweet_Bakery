

// ---------- Navigation Script ----------
function myFunction()
{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav")
    {
        x.className += " responsive";
    }
    else
    {
    x.className = "topnav";
    }
} 
// ----------#####----------




/*

//Gallery Page js
        
let currentImg = 1;
function swap(){
    //let imgNum = parseInt(this.id.slice(3));
    let imgNum = this.id.slice(3);
    //imgNum = imgNum.charAt(3);
    document.querySelector("#mainImg").src="images/pic"+imgNum+".jpg";
    currentImg = imgNum;
}

document.querySelector("#pic1").addEventListener("mouseover",swap);
document.querySelector("#pic2").addEventListener("mouseover",swap);
document.querySelector("#pic3").addEventListener("mouseover",swap);
document.querySelector("#pic4").addEventListener("mouseover",swap);
document.querySelector("#pic5").addEventListener("mouseover",swap);
document.querySelector("#pic6").addEventListener("mouseover",swap);
document.querySelector("#pic7").addEventListener("mouseover",swap);
document.querySelector("#pic8").addEventListener("mouseover",swap);
document.querySelector("#pic9").addEventListener("mouseover",swap);
document.querySelector("#pic10").addEventListener("mouseover",swap);
document.querySelector("#pic11").addEventListener("mouseover",swap);






function next(){
    if(currentImg ==11){
        document.querySelector("#mainImg").src="images/pic1.jpg";
    }
    else{
        currentImg++;
        document.querySelector("#mainImg").src="images/pic"+currentImg+".jpg";
    }
}

function previous(){
    if(currentImg ==1){
        document.querySelector("#mainImg").src="images/pic1.jpg";
    }
    else{
        currentImg--;
        document.querySelector("#mainImg").src="images/pic"+currentImg+".jpg";
    }
}
document.querySelector("#next").addEventListener("click",next);
document.querySelector("#prev").addEventListener("click",previous);


*/







//Subscribe Page js

// Declare the flowers array and other variables
let i = 0;
let bakes = [];
let time = 2000;  // Time interval between image changes (in milliseconds)

  bakes[0] = "images/recipyImg/pic1.jpg";
  bakes[1] = "images/recipyImg/pic2.jpg";
  bakes[2] = "images/recipyImg/pic3.jpg";
  bakes[3] = "images/recipyImg/pic4.jpg";
  bakes[4] = "images/recipyImg/pic5.jpg";
  bakes[5] = "images/recipyImg/pic6.jpg";
  bakes[6] = "images/recipyImg/pic7.jpg";
  bakes[7] = "images/recipyImg/pic8.jpg";


// Function to change the image
function changeImg() {
   document.querySelector("#slide").src = bakes[i];

        if (i<bakes.length-1) {
            i++;  // Move to the next image
        } else {
            i=0;  // Reset to the first image when reaching the end
        }
        setTimeout(changeImg, time);  // Call changeImg again after the specified time
    }







//Contact Page js

function processForm(event) {
  if (validate() == false) event.preventDefault();
}
function validate() {
  let firstname_val = document.querySelector('#firstname').value;
  if (firstname_val == "" || firstname_val == null) {
      alert("Please enter your first name");
      return false;
  }
  let lastname_val = document.querySelector('#lastname').value;
  if (lastname_val == "" || lastname_val == null) {
      alert("Please enter your last name");
      return false;
  }
  let telephone_val = document.querySelector('#telephone').value;
  if (telephone_val == "" || telephone_val == null) {
      alert("Please enter your telephone");
      return false;
  }
  let email_val = document.querySelector('#email').value;
  if (email_val == "" || email_val == null) {
      alert("Please enter your email");
      return false;
  }
  let noOfGuest_val = document.querySelector('#noOfGuests').value;
  if (noOfGuest_val == "" || noOfGuest_val == null) {
      alert("Please enter your number Of Guests");
      return false;
  }

  // validate that the email is an email address
  if (validateEmail(email_val) == false) {
      alert("Invalid email format.");
      return false;
  }
  if (isNumeric(noOfGuest_val) == false) {
      alert("This is not a number.");
      return false;
  }
  if (isNumeric(telephone_val) == false) {
      alert("This is not a tefephone number.");
      return false;
  }
}

function validateEmail(elementValue) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(elementValue);
}

function isNumeric(numericValue) {
  const numberPattern = /^[0-9]+$/;
  return numberPattern.test(numericValue);
}
