// Slider for the testimonials

var leftarrow = document.getElementById("leftarrow");
var rightarrow = document.getElementById("rightarrow");
var box = document.getElementById("bx");

var translateValue = box.style.transform;
var translateSum;

let i = 0;
leftarrow.onclick = function()
{
    if (i<1){
        translateSum = translateValue + "translateX(-50%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        i++;
    }
};

rightarrow.onclick = function()
{
    if (i>0){
        translateSum = translateValue + "translateX(50%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        i--;
    }
};


// Form Validation before submitting form

function validateForm() {
    let input = document.getElementById("inbox").value;
    let alert = document.getElementById("alert");
    let form = document.getElementById("formbox");

    let pattern = /[a-z]@/;

    if(input.match(pattern)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        return true
    }

    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        alert.innerHTML = "Please insert a valid email";
        return false
    }
}

// Mobile Navigation toggle

var menu = document.getElementById("menu");
var mobilenav = document.getElementById("mobileNav");

mobilenav.style.display = "none";

menu.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        menu.src = "images/icon-close.svg";
    }
    else{
        mobilenav.style.display = "none";
        menu.src = "images/icon-hamburger.svg";
    }
}

// mobile slider
var leftarr = document.getElementById("leftarrowMob");
var rightarr = document.getElementById("rightarrowMob");
var box = document.getElementById("bx");

var translateValue = box.style.transform;
var translateSum;

let a = 0;
leftarr.onclick = function()
{
    if (a<3){
        translateSum = translateValue + "translateX(-25%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        a++;
    }
};

rightarr.onclick = function()
{
    if (a>0){
        translateSum = translateValue + "translateX(25%)";
        box.style.transform = translateSum;
        translateValue = translateSum;
        a--;
    }
};


