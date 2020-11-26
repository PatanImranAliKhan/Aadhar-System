import { Component, OnInit } from '@angular/core';
import { List } from '../List';
import { UserService } from '../user.service';

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {

  public abc;
  public list: List[];
  public list2: List[];
  public nm = false;
  public a;
  public b;
  public c;
  public d;
  public e;
  public f;
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.list = this.userservice.details();
  }
  submit(): void
  {
    const ar: List[] = this.list;
    for ( const val of ar)
    {
      if ( val.id === this.abc)
      {
        this.a = val.name;
        this.b = val.id;
        this.c = val.dob;
        this.d = val.age;
        this.e = val.gender;
        this.f = val.state;
      }
    }
    this.nm = true;
  }

}
