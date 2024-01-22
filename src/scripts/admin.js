
// Activation
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

//toggle
function toggleContent(contentType) {
  var transportContent = document.getElementById('transportContent');
  var warehouseContent = document.getElementById('warehouseContent');
  
  if (contentType === 'transport') {
    document.getElementById('transportContent').style.display = 'block';
    document.getElementById('warehouseContent').style.display = 'none';
  } else if (contentType === 'warehouse') {
    document.getElementById('warehouseContent').style.display = 'block';
    document.getElementById('transportContent').style.display = 'none';
  }
  
  
}

<<<<<<< HEAD

function toggleContent(contentType) {

  var transportContent=document.getElementById('transportContent');
  var warehouseContent=document.getElementById('warehouseContent');

  if (contentType === 'transport') {
    document.getElementById('transportContent').style.display = 'block';
    document.getElementById('warehouseContent').style.display = 'none';
  } else if (contentType === 'warehouse') {
    document.getElementById('warehouseContent').style.display = 'block';
    document.getElementById('transportContent').style.display = 'none';
  }
}


// //Navbar switching
// document.addEventListener('DOMContentLoaded', function () {
//     // Default state
//     document.querySelector('.transport').style.display = 'block';
//     document.querySelector('.warehouse').style.display = 'none';

//     // Event listener for transport button
//     document.getElementById('transportnav').addEventListener('click', function () {
//       document.querySelector('.transport').style.display = 'block';
//       document.querySelector('.warehouse').style.display = 'none';
//     });

//     // Event listener for warehouse button
//     document.getElementById('warehousenav').addEventListener('click', function () {
//       document.querySelector('.transport').style.display = 'none';
//       document.querySelector('.warehouse').style.display = 'block';
//     });
//   });

// document.addEventListener('DOMContentLoaded', function () {
//   // Default state
//   showSection('transport');
  
//   // Event listener for transport button
//   document.getElementById('transportnav').addEventListener('click', function () {
//     showSection('transport');
//   });

//   // Event listener for warehouse button
//   document.getElementById('warehousenav').addEventListener('click', function () {
//     showSection('warehouse');
//   });

//   function showSection(sectionName) {
//     document.querySelector('.transport').style.display = (sectionName === 'transport') ? 'block' : 'none';
//     document.querySelector('.warehouse').style.display = (sectionName === 'warehouse') ? 'block' : 'none';
//   }
// });
=======
>>>>>>> 7b9bea35422e8bb787efaf213025f31eb480bb25
