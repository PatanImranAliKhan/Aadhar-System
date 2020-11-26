import { Component, OnInit } from '@angular/core';
import { List } from '../List';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public states = ['Andhra Prdesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh'
  , 'Jammu And Kashmir', '	Jharkhand', 'Karnataka', 'Kerela', 'Madhya Pradesh', 'Maharastra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Panjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarkhand',
   'West Bengal'];
  public a;
  public b;
  public c;
  public d;
  public e;
  public f;
  public sub = false;
  public con = false;
  public abc: List[];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.abc = this.userservice.details();
  }
  validateTopic(value): void
  {
    if (value === 'state')
    {
      this.sub = true;
    }
    else
    {
      this.sub = false;
    }
  }
  submit(): void
  {
    const user: List = {
      name: this.a,
      id: this.b,
      dob: this.c,
      age: this.d,
      gender: this.e,
      state: this.f
    };
    if ( user != null)
    {
      this.userservice.list.push(user);
      this.a = '';
      this.b = '';
      this.c = '';
      this.d = '';
      this.e = '';
      this.f = 'state';
    }
  }
  validateid(value): void
  {
    const op = this.abc.find(x => x.id === value);
    if ( op != null)
    {
      this.con = true;
    }
    else
    {
      this.con = false;
    }
    console.log(this.con);
  }

}
