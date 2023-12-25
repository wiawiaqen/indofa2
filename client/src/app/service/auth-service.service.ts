import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private authenticatedSubject = new BehaviorSubject<boolean>(false);
  authenticated$ = this.authenticatedSubject.asObservable();
  private googleAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  googleAuthenticated$ = this.googleAuthenticatedSubject.asObservable();

  // ... (các phương thức khác)

  loginWithGoogle(): void {
    this.googleAuthenticatedSubject.next(true);
    this.authenticatedSubject.next(true);
  }}
