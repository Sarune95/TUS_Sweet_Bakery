

//-------Navigation Bar Script 
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    }
    else {
    x.className = "topnav";
        }
} 


//-------Gallery Page js     
let currentImg = 1;
function swap(){
    let imgNum = this.id.slice(3);
    //imgNum = imgNum.charAt(3);
    document.querySelector("#mainImg").src="images/pic"+imgNum+".jpg";
    currentImg = imgNum;
}

const picIds = ["#pic1", "#pic2", "#pic3", "#pic4", "#pic5", "#pic6", "#pic7", "#pic8", "#pic9", "#pic10", "#pic11"];
picIds.forEach(id => {
    const element = document.querySelector(id);
    if (element) {
        element.addEventListener("mouseover", swap);
    }
});

function next(){
    if(currentImg ==11){
        currentImg=1; // Wrap around to the first image
        document.querySelector("#mainImg").src="images/pic1.jpg";
    }
    else{
        currentImg++;
        document.querySelector("#mainImg").src="images/pic"+currentImg+".jpg";
    }
}

function previous(){
    if(currentImg ==1){
        currentImg=11; // Wrap around to the last image
        document.querySelector("#mainImg").src="images/pic1.jpg";
    }
    else{
        currentImg--;
        document.querySelector("#mainImg").src="images/pic"+currentImg+".jpg";
    }
}
const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

if (nextButton) {
    nextButton.addEventListener("click", next);
}
if (prevButton) {
    prevButton.addEventListener("click", previous);
}


//-------Recipes Page js
// Declare the bakes array and other variables
let i = 0;
let bakes = [];
let time = 2000;  // Time interval between image changes (in milliseconds)

  bakes[0] = "images/recipyImg/pic1.jpg";
  bakes[1] = "images/recipyImg/pic2.jpg";
  bakes[2] = "images/recipyImg/pic3.jpg";
  bakes[3] = "images/recipyImg/pic4.jpg";
  bakes[4] = "images/recipyImg/pic5.jpg";
  bakes[5] = "images/recipyImg/pic6.jpg";


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


//-------Contact Page js
function processForm(event) {
    if (validate() == false) event.preventDefault();
}
function validate() {
    let name_val = document.querySelector('#name').value;
    if (name_val == "" || name_val == null) {
        alert("Please enter your first name");
        return false;
    }
    let lastname_val = document.querySelector('#lastname').value;
    if (lastname_val == "" || lastname_val == null) {
        alert("Please enter your last name");
        return false;
    }
    let address = document.querySelector('#address').value;
    if (address == "" || address == null) {
        alert("Please enter your address");
        return false;
    }
    
    let mobile_val = document.querySelector('#mobile').value;
    if (mobile_val == "" || mobile_val == null) {
        alert("Please enter your mobile number");
        return false;
    }
    if (validateMobile(mobile_val) == false) {
        alert("Mobile number must begin with 087, 086, or 085 and be 10 characters long.");
        return false;
    }
    
    let email_val = document.querySelector('#email1').value;
    if (email_val == "" || email_val == null) {
        alert("Please enter your email");
        return false;
    }
    let confirm_email_val2 = document.querySelector('#email2').value;
    if (confirm_email_val2 == "" || confirm_email_val2 == null) {
        alert("Please confirm your email");
        return false;
    }

    // Validate that the email is an email address
    if (validateEmail(email_val) == false) {
        alert("Invalid email format.");
        return false;
    }

    // Validate that email and confirm email match
    if (email_val.toLowerCase() !== confirm_email_val2.toLowerCase()) {
        alert("Email and confirm email do not match.");
        return false;
    }
    
    let membership = document.querySelector('input[name="membership"]:checked');
    if (!membership) {
        alert("Please select member or not a member.");
        return false;
    }
    let query = document.querySelector('#query').value;
    if (query == "" || query == null) {
        alert("Please enter your query");
        return false;
    }
}

function validateEmail(elementValue) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function validateMobile(mobileValue) {
    const mobilePattern = /^(087|086|085)[0-9]{7}$/;
    return mobilePattern.test(mobileValue);
}

function isNumeric(numericValue) {
    const numberPattern = /^[0-9]+$/;
    return numberPattern.test(numericValue);
}
