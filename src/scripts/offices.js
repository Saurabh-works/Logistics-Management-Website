var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");
function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

function openNav() {
    document.getElementById("office-left").style.width = "250px";
    // document.getElementById("office-right").style.marginLeft = "250px";
    document.getElementById("open-btn").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("office-left").style.width = "0";
    document.getElementById("office-right").style.marginLeft = "0";
    document.getElementById("open-btn").style.visibility = "visible";
    document.getElementById("office-right").style.width = "100%";
    document.getElementById("office-left").style.transition = ".1s";
    // document.getElementsByClassName("card-details").style.color = "red";

    // var myDiv = document.getElementsByClassName('card-details');
    // var currentSize = window.getComputedStyle(myDiv, null).getPropertyValue('font-size');
    // var newSize = (parseFloat(currentSize) - 8) + 'px'; // Decrease by 2 pixels
    // myDiv.style.fontSize = newSize;
}
