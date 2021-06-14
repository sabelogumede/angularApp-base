import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  getAuthors() {
    return ["Sabelo", "Hlelo", "Fezeka"];
  }

  constructor() { }
}
