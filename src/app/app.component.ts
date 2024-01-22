import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuantumCargo-angular';
  isChecked: boolean = false; // Ensure this line is present

  @HostListener('document:click', ['$event'])
  handleClick(event: Event): void {
    // Check if the clicked element is not the checkbox
    if (!(event.target as HTMLElement).classList.contains('checkbox')) {
      // Uncheck the checkbox
      this.isChecked = false;
    }
  }
}
