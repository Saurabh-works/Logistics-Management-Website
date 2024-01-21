//transport Activation
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}


//Navbar switching
document.addEventListener('DOMContentLoaded', function () {
    // Default state
    document.querySelector('.transport').style.display = 'block';
    document.querySelector('.warehouse').style.display = 'none';

    // Event listener for transport button
    document.getElementById('transportnav').addEventListener('click', function () {
      document.querySelector('.transport').style.display = 'block';
      document.querySelector('.warehouse').style.display = 'none';
    });

    // Event listener for warehouse button
    document.getElementById('warehousenav').addEventListener('click', function () {
      document.querySelector('.transport').style.display = 'none';
      document.querySelector('.warehouse').style.display = 'block';
    });
  });