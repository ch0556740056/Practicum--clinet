import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import PersonalDetail from '../class/PersonalDetails';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //subject יורש מ observable

  currentUser=new BehaviorSubject<{FirstName:string,LastName:string,Identity:string,
    DateOfBirth:Date,Gender:number,
    HMO:string}>(new PersonalDetail("","","",null,null,""));  //behvior- בשונה מסבגקט רגיל
  //הוא שולח לכל מי שנרשם לקבל את הערך של הנקסט האחרון שזקרו
  //אם לא היה שום נקסט הוא שולח ערך ברירת מחדל
  //ולכן הוא מחייב לשלוח ערך ברירת מחדל

  constructor() { }
  saveInStorageUser(user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  getFromStorage() {
    let u = localStorage.getItem("currentUser");
    if (!u)
      return null;
    return JSON.parse(u);
  }
  removeFromStorage() {
    localStorage.removeItem("currentUser");
  }
}
