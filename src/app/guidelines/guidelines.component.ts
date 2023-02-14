import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit,OnDestroy  {
  userName = "";
  sub: Subscription;//משתנה מסוג שיודע לשמור הירשמות לקבל עדיכונים
  constructor(public userSer: UserServiceService) { }
  ngOnInit(): void {
    // שמורים את ההירשמות כדי שיהיה אפשר לבטלה
    this.sub = this.userSer.currentUser.subscribe(succ => {console.log(succ); this.userName = succ.FirstName ? succ.FirstName : "" })
    this.userName=this.userSer.getFromStorage().FirstName
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

 
}
