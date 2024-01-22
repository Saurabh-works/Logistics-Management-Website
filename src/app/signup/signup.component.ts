import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  role: string = 'user'; // Default role
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.authenticate(this.email, this.password, this.role).subscribe(result => {
      if (result === 'invalid') {
        alert('Invalid credentials. Please enter correct information.');
      } else {
        this.router.navigate([`/${this.role}`]);
      }
    });
  }

}