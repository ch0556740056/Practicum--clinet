import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import Child from '../class/Child';
import PersonalDetail from '../class/PersonalDetails';
import { ChildServiceService } from '../service/child-service.service';
import { PersonalDetailServiceService } from '../service/personal-detail-service.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit,OnDestroy{
  constructor(public personalService:PersonalDetailServiceService,public childsService:ChildServiceService,public userService:UserServiceService) { }
 
 

empty:PersonalDetail=new PersonalDetail(null,null,null,new Date(),null,null)//בנ"א
arrChildren:Child[]=[]//מערך ילדים

oneChild:Child=new Child(null,null,null,null)//ילד בודד
ngOnInit(){//מילוי שדות במקרה של חזרה מקומפוננטה אחרת
  
   this.empty = this.userService.getFromStorage();
}
ngOnDestroy() {//שמירת נתונים במקרה של מעבר קומפוננטה
  this.userService.saveInStorageUser(this.empty);
 }
save(f)
{
  //בדיקת תקינות תז
for (let index = 0; index < 9; index++) {
 if(this.empty.Identity[index]>"9"||this.empty.Identity[index]<"0"){
  alert("תעודת זהות לא תקינה")
  return;
 }
}
//הוספת פרטים אישיים למסד
  this.personalService.AddPersonalDetails(this.empty).subscribe((succ) => {
  if(succ===undefined){
      console.log("אתה מוכר במערכת כנראה נרשמת כבר בעבר");
   }
   else{
    console.log("המידע נשמר בהצלחה");}
    
  } ,
    (err) => {
   })
  
   console.log(this.empty);
  for (let index = 0; index < this.arrChildren.length; index++) {//עדכון תז הורים לילדים במערך(רק עכשיו למקרה שהשתנה עד שמר את הפרטים)
    console.log(this.empty.Identity);
    this.arrChildren[index].ParentId=this.empty.Identity
   }
  for (let index = 0; index < this.arrChildren.length; index++) {// הוספת הילדים לטבלת ילדים רק אם לא קיימים בטבלה בדיקה בשרת
   this.childsService.AddChild(this.arrChildren[index]).subscribe((succ) => {
   console.log(succ);
    },
    (err) => {
      console.log("child");
    
   })
 }
this.arrChildren=[]
this.userService.saveInStorageUser(new PersonalDetail("","","",null,null,""));
f.reset();
alert("המידע נשמר בהצלחה!");

}
saveName(){//שמירה בכל שינוי בשם
  this.userService.saveInStorageUser(this.empty);
}
addChild(){//הוספת ילד נוסף במערך הילדים
  this.arrChildren.push(this.oneChild)
  console.log(this.oneChild);
 this.oneChild=new Child(null,null,null,null)
}

}

