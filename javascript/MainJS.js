function openNav() {
    document.getElementById("leftnav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navButton").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("leftnav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("navButton").style.visibility = "visible";
}
    
window.onscroll = function () {
    scrollFunction()
};

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