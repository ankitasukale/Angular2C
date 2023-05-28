import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  registerUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
    return true;
  }

  loginUser(data: any) {
    if (localStorage.getItem('user')) {
      let localData = JSON.parse(localStorage.getItem('user') || '');
      if (
        data.email === localData.email &&
        data.password === localData.password
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  getProfile() {
    let localData = JSON.parse(localStorage.getItem('user') || '');
    return localData;
  }

  logout() {
    localStorage.removeItem('user');
    return true;
  }
}
