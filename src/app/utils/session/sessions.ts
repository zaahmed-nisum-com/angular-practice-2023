import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  getSession = (key: string) => {
    return JSON.parse(window.sessionStorage.getItem(key) || 'null');
  };
  createSession = (key: string, value: object) => {
    return window.sessionStorage.setItem(key, JSON.stringify(value));
  };
  deleteSession = () => {};
}
