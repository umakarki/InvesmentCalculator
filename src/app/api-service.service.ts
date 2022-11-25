import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

postForm(data:any){
  return this.http.post("http://localhost:3000/signupUsers",data)
}
getUser(){
  return this.http.get('http://localhost:3000/signupUsers');
}

deleteUser(id:number){
  return this.http.delete('http://localhost:3000/signupUsers/'+id)
  
}
getOneuser(id:any) {
  return this.http.get('http://localhost:3000/signupUsers/'+id);
}
  
updateData(id:any,data:any){
  return this.http.patch('http://localhost:3000/signupUsers/'+id,data);
}


}