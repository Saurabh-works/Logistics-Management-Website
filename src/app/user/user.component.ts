import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  title = 'frontend';
  orderNumber = this.generateOrderNumber();
  temporaryOrders: any[] = [];
  submitCount = 1;

  calculatePrice(): void {
    const orgName = (<HTMLInputElement>document.getElementById('orgName')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const contactNo = (<HTMLInputElement>document.getElementById('contactNo')).value;
    const category = (<HTMLInputElement>document.getElementById('category')).value;
    const transport = (<HTMLInputElement>document.getElementById('transport')).value;
    const dateReceive = (<HTMLInputElement>document.getElementById('dateReceive')).value;
    const weight = parseFloat((<HTMLInputElement>document.getElementById('weight')).value);
    const distance = parseFloat((<HTMLInputElement>document.getElementById('distance')).value);
    let pricePerKm;

    switch (transport) {
      case 'byAir':
        pricePerKm = 100;
        break;
      case 'byWater':
        pricePerKm = 30;
        break;
      case 'byRoad':
        pricePerKm = 50;
        break;
      default:
        pricePerKm = 0;
    }

    const totalPrice = weight * distance * pricePerKm;

    const orderDetails = {
      orderNumber: this.orderNumber,
      orgName,
      email,
      contactNo,
      category,
      transport,
      weight,
      dateTransport: '', // You might want to handle this value
      dateReceive,
      distance,
      totalPrice,
      submitCount: this.submitCount
    };

    this.temporaryOrders.push(orderDetails);
    this.displayOrderDetails(this.temporaryOrders);
    this.displayOrderTable(this.temporaryOrders);
    this.displayOrdercount(this.temporaryOrders);
    this.orderNo(this.temporaryOrders);

    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
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

      <hr style="border: 4px solid #fd4c00; ">
    `;

    this.submitCount++;
    document.getElementById('orderCards')?.appendChild(orderCard);
    // document.getElementById('orderForm')?.reset();
    const form = document.getElementById('orderForm') as HTMLFormElement | null;
    if (form) {
      form.reset();
    }
  }

  displayOrderDetails(orders: any[]): void {
    const orderDetailsContainer = document.getElementById('orderDetailsContainer');
    if (orderDetailsContainer) {
      orderDetailsContainer.innerHTML = `
        <div style ="text-align: center;">
        <span style = "font-weight: bolder;
        border-bottom: 4px solid #fd5b17;
        padding-bottom: .5rem;
        font-size: 1.5rem;
        text-align: center;">
          Order Details
        </span>
        </div>
        <p style = "margin-top: 10px;"><strong>Order ID:</strong> ${this.orderNumber}</p>
      `;
    }
  }

  displayOrderTable(orders: any[]): void {
    const orderTableContainer = document.getElementById('orderTableContainer');
    if (orderTableContainer) {
      orderTableContainer.innerHTML = '';

      if (orders.length === 0) {
        return;
      }

      const orderTable = document.createElement('table');
      orderTable.classList.add('order-table');

      orderTable.style.width = "100%";

      const tableHeader = document.createElement('thead');

      tableHeader.style.backgroundColor =  "#061c3d";
      tableHeader.style.color = "#fff";
      tableHeader.style.fontSize = ".8rem";

      tableHeader.innerHTML = `
        <tr>
          <th style="border: 2px solid #ddd; border-collapse: collapse; padding: 10px;">
          
          Name of Organization
          
          </th>
          <th style="border: 2px solid #ddd; border-collapse: collapse; padding: 10px;">
          
          Category
          
          </th>
          <th style="border: 2px solid #ddd; border-collapse: collapse; padding: 10px;">
          
          Arrival Date
          
          </th>
          <th style="border: 2px solid #ddd; border-collapse: collapse; padding: 10px;">
          
          Total Price
          
          </th>
          <th style="border: 2px solid #ddd; border-collapse: collapse; padding: 10px;">
          
          Tracking Order
          
          </th>
        </tr>
      `;
      orderTable.appendChild(tableHeader);

      const tableBody = document.createElement('tbody');
      orders.forEach(order => {
        const row = document.createElement('tr');

        row.style.fontSize = ".8rem";

        row.innerHTML = `
          <td style="border: 2px solid #ddd; border-collapse: collapse; padding-left: 5px;">
          
          ${order.orgName}
          
          </td>
          <td style="border: 2px solid #ddd; border-collapse: collapse; padding-left: 5px;">
          
          ${order.category}
          
          </td>
          <td style="border: 2px solid #ddd; border-collapse: collapse; padding-left: 5px;">
          
          ${order.dateReceive}
          
          </td>
          <td style="border: 2px solid #ddd; border-collapse: collapse; padding-left: 5px;">
          
          $${order.totalPrice.toFixed(2)}
          
          </td>
          <td style="border: 2px solid #ddd; border-collapse: collapse;">
          
          <button style="font-size: .8rem;
          min-width: 5rem;
          display: block;
          margin: 5px auto 5px;
          border: 0;
          background-color: #fd5b17;
          color: white;
          line-height: 30px;
          border-radius: 8px;
          -webkit-transition: all .3s ease-out;
          transition: all .3s ease-out;">
          
          Status
          
          </button>
          
          </td>
        `;
        tableBody.appendChild(row);
      });
      orderTable.appendChild(tableBody);

      orderTableContainer.appendChild(orderTable);
    }
  }

  orderNo(orders: any[]): void {
    const ORN = document.getElementById('ord');
    if (ORN) {
      ORN.textContent = this.orderNumber.toString();
    }
  }

  displayOrdercount(orders: any[]): void {
    const total_pro = document.getElementById('total-product');
    if (total_pro) {
      total_pro.textContent = this.submitCount.toString();
    }
  }

  generateOrderNumber(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }
}


