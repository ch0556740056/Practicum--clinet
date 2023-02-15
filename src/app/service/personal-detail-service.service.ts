import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import PersonalDetails from 'src/app/class/PersonalDetails';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonalDetailServiceService {


  constructor(public http:HttpClient) { }
baseRouteUrl=`${environment.baseUrl}/PersonDetail`
// GetAllPersonDetails(){
//   return this.http.get<PersonalDetails[]>(`${this.baseRouteUrl}`);
// }
// GetPersonalDetailById(id) {
//   return this.http.get<PersonalDetails>(`${this.baseRouteUrl}/${id}`);
// }
AddPersonalDetails(personal:PersonalDetails){
  return this.http.post<PersonalDetails>(`${this.baseRouteUrl}`,personal)
}
}
