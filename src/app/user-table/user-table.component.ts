import { Component,Output,EventEmitter, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-table',
  templateUrl:'./user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent  {
  updataData=new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    dob: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    phonenumber: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern("^[0-9]*$"),Validators.minLength(10)])

  })
  userData:any={};
  searchText: string = '';
  filteredUserList: any[] = [];
  deleted:any;
  userList!: any;
  p: number = 1;
 
  addForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('', [Validators.required, Validators.pattern((/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/))]),
    dob:new FormControl('', [Validators.required]),
    password:new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    phonenumber:new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$"), Validators.minLength(10)]),
  })
constructor(private auth:AuthService, private route:Router){
}


filterUser() {
  if (this.searchText.trim() === '' || this.searchText ==='') {
    this.userList = this.filteredUserList;
  } else {
    this.userList = this.filteredUserList;
    this.userList = this.userList.filter((user: any) =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.dob.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.phonenumber.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}

ngOnInit():void{
  this.users();
 
}

////get the data from api
users(){
  this.auth.allUser().subscribe((data)=>
  {console.log(data)
  this.userList=data;
  this.filteredUserList=this.userList
  })
}

/////////

handle(users:any){
this.userData=users
console.log(this.userData)
}



onUpdate(){
  this.auth.userUpdate(this.updataData.value,this.userData?.id).subscribe((datas)=>{
    console.log(datas)
  })


}

/////////////delete////

delete(id:any){
  this.auth.delete(id).subscribe((res)=>{
    console.log(res);
    this.users();
  })
}

get n(){
 return this.updataData.controls,this.addForm.controls
}
}

