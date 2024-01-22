import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// export class AuthService {

//   constructor() { }
// }

export class AuthService {
  private users = [
    { name: 'User', email: 'user@gmail.com', password: 'user123', role: 'user' },
    { name: 'Admin', email: 'admin@gmail.com', password: 'admin123', role: 'admin' }
  ];

  authenticate(email: string, password: string, role: string): Observable<string> {
    const user = this.users.find(u => u.email === email && u.password === password && u.role === role);

    if (user) {
      return of(user.role);
    } else {
      return of('invalid');
    }
  }
}