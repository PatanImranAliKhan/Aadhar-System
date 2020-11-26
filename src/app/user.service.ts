import { Injectable } from '@angular/core';
import { List } from './List';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list: List[] = [];
  constructor() { }

  details(): any
  {
    return this.list;
  }
  
}
