import { Component, OnInit } from '@angular/core';
import { List } from '../List';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public abc;
  public a;
  public b;
  public count = 0;
  list: List[];
  list2: List[] = [];
  public sub = false;
  public con1 = false;
  public con2 = false;
  public con3 = false;
  public con4 = false;
  public con5 = false;
  public con6 = false;
  public nm = false;
  def = ['Name', 'Aadhar Id', 'Date Of Birth', 'Age', 'Gender', 'State'];
  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.list = this.userservice.details();
  }
  validateTopic(value): any
  {
    this.nm = false;
    if ( value === '--select--')
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
    const a = this.abc;
    if (a === 'Name')
    {
      this.con1 = true;
      this.con2 = false;
      this.con3 = false;
      this.con4 = false;
      this.con5 = false;
      this.con6 = false;
    }
    else if (a === 'Aadhar Id')
    {
      this.con1 = false;
      this.con2 = true;
      this.con3 = false;
      this.con4 = false;
      this.con5 = false;
      this.con6 = false;
    }
    else if (a === 'Date Of Birth')
    {
      this.con1 = false;
      this.con2 = false;
      this.con3 = true;
      this.con4 = false;
      this.con5 = false;
      this.con6 = false;
    }
    else if (a === 'Age')
    {
      this.con1 = false;
      this.con2 = false;
      this.con3 = false;
      this.con4 = true;
      this.con5 = false;
      this.con6 = false;
    }
    else if (a === 'Gender')
    {
      this.con1 = false;
      this.con2 = false;
      this.con3 = false;
      this.con4 = false;
      this.con5 = true;
      this.con6 = false;
    }
    else
    {
      this.con1 = false;
      this.con2 = false;
      this.con3 = false;
      this.con4 = false;
      this.con5 = false;
      this.con6 = true;
    }
  }

  submit1(): void
  {
    this.list2 = [];
    const op = this.list.find(x => x.name === this.a);
    if ( op != null)
    {
      for ( const value of this.list)
      {
        if ( value.name === this.a)
        {
          this.list2.push(value);
        }
      }
      this.a = '';
      this.nm = true;
    }
    this.count = this.list2.length;
  }
  submit2(): void
  {
    this.list2 = [];
    const op = this.list.find(x => (x.id >= this.a && x.id <= this.b));
    if ( op != null)
    {
      for ( const value of this.list)
      {
        if ( value.id >= this.a && value.id <= this.b)
        {
          this.list2.push(value);
        }
      }
      this.a = '';
      this.b='';
      this.nm = true;
    }
    this.count = this.list2.length;
  }
  submit3(): void
  {
    this.list2 = [];
    const op = this.list.find(x => x.dob === this.a );
    if ( op != null)
    {
      for ( const value of this.list)
      {
        if ( value.dob === this.a)
        {
          this.list2.push(value);
        }
      }
      this.a = '';
      this.nm = true;
    }
    this.count = this.list2.length;
  }
  submit4(): void
  {
    this.list2 = [];
    const op = this.list.find(x => x.age === this.a );
    if ( op != null)
    {
      for ( const value of this.list)
      {
        if ( value.age === this.a)
        {
          this.list2.push(value);
        }
      }
      this.a = '';
      this.nm = true;
    }
    this.count = this.list2.length;
  }
  submit5(): void
  {
    this.list2 = [];
    const op = this.list.find(x => x.gender === this.a );
    if ( op != null)
    {
      for ( const value of this.list)
      {
        if ( value.gender === this.a)
        {
          this.list2.push(value);
        }
      }
      this.a = '';
      this.nm = true;
    }
    this.count = this.list2.length;
  }
  submit6(): void
  {
    this.list2 = [];
    const op = this.list.find(x => x.state === this.a);
    if ( op != null)
    {
      for ( const value of this.list)
      {
        if ( value.state === this.a)
        {
          this.list2.push(value);
          console.log(this.list2);
        }
      }
      this.a = '';
      this.nm = true;
    }
    this.count = this.list2.length;
  }

}
