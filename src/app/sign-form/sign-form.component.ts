import { Component , Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrl: './sign-form.component.css'
})
export class SignFormComponent {
  valide = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.pattern((/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)),Validators.maxLength(20),Validators.minLength(5)]),
    password: new FormControl('',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),Validators.maxLength(10)])
  })
constructor(private auth:AuthService,private route:Router){

}

onSign() {
return this.auth.allUser().subscribe((res:any)=>{
    const user=res.find((a:any)=>
    (a.email === this.valide.value.email && a.password === this.valide.value.password)
    
 )
 console.log(user);
 if(user){
  alert("Validation succusully")
this.route.navigate(['/user'])
sessionStorage.setItem('buttonEnabled','true')
sessionStorage.setItem('userName',user.email)

 }
 else {
  const correctEmail=res.find((a:any)=>a.email === this.valide.value.email);
  if(correctEmail){
   
    alert("Incorrect password");
    this.valide.reset()

 }
 else{
  alert("Check the Email or Password");
  this.valide.reset()
 }
}
});


  }
  get r(){
    return this.valide.controls
  }

}

