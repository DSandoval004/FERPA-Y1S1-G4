// This function is for the nav when the button is clicked the width is set to 250 pixels and the margin.
// The nav button is also hidden when its pressed. 
// If the nav is opened on mobile then it makes the whole screen the nav.
function openNav() {
    document.getElementById("leftnav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navButton").style.visibility = "hidden";
    if (mobileNav.matches) {
        document.getElementById("leftnav").style.width = "100%";
        document.getElementById("main").style.marginLeft = "100%";
    } else {
        document.getElementById("leftnav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
}
// This closes nav makes the width and margins 0 and the button visible
function closeNav() {
    document.getElementById("leftnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("navButton").style.visibility = "visible";
}
// sets the function to listen when the user scrolls down 
window.onscroll = function () {
    scrollFunction()
};
// When the user scroll down and they are 20 pixels down then the button appears to go to the top.
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// variable for the mobile nav when the users on mobile then creates listener to the open nav function.
var mobileNav = window.matchMedia("(max-width: 600px)");
mobileNav.addListener(openNav);
