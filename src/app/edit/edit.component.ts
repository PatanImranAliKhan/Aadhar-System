import { Component, OnInit } from '@angular/core';
import { List } from '../List';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public klu;
  public a;
  public c;
  public d;
  public e;
  public f;
  public list: List[];
  public nm = false;
  public sub = false;
  public states = ['Andhra Prdesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh'
  , 'Jammu And Kashmir', '	Jharkhand', 'Karnataka', 'Kerela', 'Madhya Pradesh', 'Maharastra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Panjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarkhand',
   'West Bengal'];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.list = this.userservice.details();
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
    const n = this.list.find(x => x.id === this.klu );
    if ( n != null)
    {
      this.nm = true;
      for (const value of this.list)
      {
        if ( value.id === this.klu)
        {
          this.a = value.name;
          this.c = value.dob;
          this.d = value.age;
          this.e = value.gender;
          this.f = value.state;
        }
      }
    }
  }
  edit(): void
  {
    for (const value of this.list)
    {
      if ( value.id === this.klu)
      {
        value.name = this.a;
        value.dob = this.c;
        value.age = this.d;
        value.gender = this.e;
        value.state = this.f;
      }
    }
    this.nm = false;
  }

}
