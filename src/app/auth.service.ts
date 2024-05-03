import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiEndPoint=environment.baseUrls
  constructor(private router: Router, private http: HttpClient) { }
  //registerform to set the data in api by using an (post method)
  register(form: any) {
    return this.http.post(this.apiEndPoint +'/alluser', form)
  }
  //Userform to get the data from api by using an(get method)
  allUser() {
    return this.http.get(this.apiEndPoint +'/alluser')
  }
  // Get the data from Userform and (edit / update )the  by using an(put method)
  userUpdate(form: any, id: any) {
    return this.http.put(this.apiEndPoint +'/alluser/' + id, form)
  }
  //Get the data from Userform and (delete)the  by using an(delete method)
  delete(id: any) {
    return this.http.delete(this.apiEndPoint +'/alluser/' + id)
  }

  
}
