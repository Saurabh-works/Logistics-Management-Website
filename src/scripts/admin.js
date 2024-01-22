
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

