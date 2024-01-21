var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  document.getElementById(tabname).classList.add("active-tab");
}

const orderNumber = generateOrderNumber();
function generateOrderNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}



// Ship
let temporaryOrders = [];
let submitCount = 1;
function calculatePrice() {
  const orgName = document.getElementById("orgName").value;
  const email = document.getElementById("email").value;
  const contactNo = document.getElementById("contactNo").value;
  const category = document.getElementById("category").value;
  const transport = document.getElementById("transport").value;
  const dateReceive = document.getElementById("dateReceive").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const distance = parseFloat(document.getElementById("distance").value);
  let pricePerKm;

  switch (transport) {
    case "byAir":
      pricePerKm = 100;
      break;
    case "byWater":
      pricePerKm = 30;
      break;
    case "byRoad":
      pricePerKm = 50;
      break;
    default:
      pricePerKm = 0;
  }
  var totalPrice = weight * distance * pricePerKm;

  const orderDetails = {
    orderNumber,
    orgName,
    email,
    contactNo,
    category,
    transport,
    weight,
    dateTransport,
    dateReceive,
    distance,
    totalPrice,
    submitCount
  };

  temporaryOrders.push(orderDetails);
  displayOrderDetails(temporaryOrders);
  displayOrderTable(temporaryOrders);
  displayOrdercount(temporaryOrders);
  orderNo(temporaryOrders);
  

  var orderCard = document.createElement("div");
  orderCard.classList.add("order-card");
  orderCard.innerHTML = `
    <h3>Order Details</h3>
    <table>
        <tr>
            <td><p><strong>Name of Organization:</strong></p></td>
            <td><p>${orgName}</p></td>
        </tr>

        <tr>
            <td><p><strong>Type of Transport:</strong></p></td>
            <td><p>${transport}</p></td>
        </tr>

        <tr>
            <td><p><strong>Email:</strong></p></td>
            <td><p>${email}</p></td>
        </tr>

        <tr>
            <td><p><strong>Total Price:</strong></p></td>
            <td><p>${totalPrice.toFixed(2)} Rs.</p></td>
        </tr>
    </table>
    `;

    submitCount++;
  document.getElementById("orderCards").appendChild(orderCard);
  document.getElementById("orderForm").reset();
}


function displayOrderDetails(orders) {
  const orderDetailsContainer = document.getElementById("orderDetailsContainer");
  orderDetailsContainer.innerHTML = '';
  orderDetailsContainer.innerHTML = `
    <div><span>Order Details</span></div>
    <p><strong>Order ID:</strong> ${orderNumber}</p>
  `;
}


function displayOrderTable(orders) {
  const orderTableContainer = document.getElementById("orderTableContainer");
  orderTableContainer.innerHTML = '';


  if (orders.length === 0) {
    return;
  }

  const orderTable = document.createElement("table");
  orderTable.classList.add("order-table");

  const tableHeader = document.createElement("thead");
  tableHeader.innerHTML = `
    <tr>
      <th>Name of Organization</th>
      <th>Email</th>
      <th>Category</th>
      <th>Arrival Date</th>
      <th>Total Price</th>
      <th>Tracking Order</th>
    </tr>
  `;
  orderTable.appendChild(tableHeader);

  const tableBody = document.createElement("tbody");
  orders.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.orgName}</td>
      <td>${order.email}</td>
      <td>${order.category}</td>
      <td>${order.dateReceive}</td>
      <td>$${order.totalPrice.toFixed(2)}</td>
      <td><button>Status</button></td>
    `;
    tableBody.appendChild(row);
  });
  orderTable.appendChild(tableBody);

  orderTableContainer.appendChild(orderTable);
}


function orderNo(orders){
  const ORN = document.getElementById("ord");
  ORN.textContent = orderNumber;
}

function displayOrdercount(orders){
  const total_pro = document.getElementById("total-product");
  total_pro.textContent = submitCount;
}

