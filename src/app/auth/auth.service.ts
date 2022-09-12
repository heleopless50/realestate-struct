import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  SignIn(email: string, password: string) {}

  SetUserData(user: any) {}

  SignOut() {}
}
