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










// <!-- payment JS -->

    
      input_credit_card = function(input)
{
    var format_and_pos = function(char, backspace)
    {
        var start = 0;
        var end = 0;
        var pos = 0;
        var separator = " ";
        var value = input.value;

        if (char !== false)
        {
            start = input.selectionStart;
            end = input.selectionEnd;

            if (backspace && start > 0) // handle backspace onkeydown
            {
                start--;

                if (value[start] == separator)
                { start--; }
            }
            // To be able to replace the selection if there is one
            value = value.substring(0, start) + char + value.substring(end);

            pos = start + char.length; // caret position
        }

        var d = 0; // digit count
        var dd = 0; // total
        var gi = 0; // group index
        var newV = "";
        var groups = /^\D*3[47]/.test(value) ? // check for American Express
        [4, 6, 5] : [4, 4, 4, 4];

        for (var i = 0; i < value.length; i++)
        {
            if (/\D/.test(value[i]))
            {
                if (start > i)
                { pos--; }
            }
            else
            {
                if (d === groups[gi])
                {
                    newV += separator;
                    d = 0;
                    gi++;

                    if (start >= i)
                    { pos++; }
                }
                newV += value[i];
                d++;
                dd++;
            }
            if (d === groups[gi] && groups.length === gi + 1) // max length
            { break; }
        }
        input.value = newV;

        if (char !== false)
        { input.setSelectionRange(pos, pos); }
    };

    input.addEventListener('keypress', function(e)
    {
        var code = e.charCode || e.keyCode || e.which;

        // Check for tab and arrow keys (needed in Firefox)
        if (code !== 9 && (code < 37 || code > 40) &&
        // and CTRL+C / CTRL+V
        !(e.ctrlKey && (code === 99 || code === 118)))
        {
            e.preventDefault();

            var char = String.fromCharCode(code);

            // if the character is non-digit
            // OR
            // if the value already contains 15/16 digits and there is no selection
            // -> return false (the character is not inserted)

            if (/\D/.test(char) || (this.selectionStart === this.selectionEnd &&
            this.value.replace(/\D/g, '').length >=
            (/^\D*3[47]/.test(this.value) ? 15 : 16))) // 15 digits if Amex
            {
                return false;
            }
            format_and_pos(char);
        }
    });
    
    // backspace doesn't fire the keypress event
    input.addEventListener('keydown', function(e)
    {
        if (e.keyCode === 8 || e.keyCode === 46) // backspace or delete
        {
            e.preventDefault();
            format_and_pos('', this.selectionStart === this.selectionEnd);
        }
    });
    
    input.addEventListener('paste', function()
    {
        // A timeout is needed to get the new value pasted
        setTimeout(function(){ format_and_pos(''); }, 50);
    });
    
    input.addEventListener('blur', function()
    {
    	// reformat onblur just in case (optional)
        format_and_pos(this, false);
    });

    input.addEventListener('keyup', function(){
        document.getElementById('card-number').innerHTML = this.value;
    })
};

input_credit_card(document.getElementById('credit-card'));

document.getElementById('card-name').addEventListener('keyup', function(){
    document.querySelector('.name-holder').innerHTML = this.value;
});

document.getElementById('exp-month').addEventListener('keyup', function(){
    document.querySelector('.exp-month').innerHTML = this.value;
});

document.getElementById('exp-year').addEventListener('keyup', function(){
    document.querySelector('.exp-year').innerHTML = this.value;
});

   
