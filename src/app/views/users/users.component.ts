import { Component, OnInit } from '@angular/core';
import { ListserviceService } from '../../shared/services/listservice.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersComponent implements OnInit {


  public users:[{}];
  public title:string = "Users List";
  public totalreslist:any = [];
  constructor(
    private listService:ListserviceService
  ) {}

  ngOnInit() {
    this.listService.getList()
        .subscribe(result => {
          this.totalreslist = result;
          this.users = this.totalreslist.splice(0,10);
        });
  }
  onScroll(){
    this.users = this.totalreslist.splice(0,this.users.length + 3);
    console.log(this.users);
  }

}
