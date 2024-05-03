import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { response } from 'express';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit {
  loading = false;
  constructor(private auth: AuthService, private route: Router) {

  }
  biodata = new FormGroup({
    name: new FormControl('', [Validators.required ,Validators.pattern(/^[a-zA-Z\s._-]*$/), Validators.maxLength(30),Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.pattern((/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)),Validators.maxLength(20),Validators.minLength(5)]),
    dob: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),Validators.maxLength(10)]),
    phonenumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.minLength(10)])
  })

  ngOnInit(): void {

  }
  onSubmit() {
    if (this.biodata.valid) {
    this.auth.allUser().subscribe((res: any) => {
      const user = res.find((a: any) =>
        (a.email === this.biodata.value.email && a.phonenumber === this.biodata.value.phonenumber)
      );
      console.log(user);
      if (!user) {  
        if (this.biodata.valid) {
          this.loading = true;
          this.auth.register(this.biodata.value).subscribe(res => {
            console.log(res);
            alert("Your Form is Completed");
            this.route.navigate(['/sign-in']);
          });
        } 
      } else {
        this.biodata.reset()
        alert("Check the Email");
      }
    });
  }
  else {
    alert("Your Form is InCompleted");
  }
  }
  

  get n() {
    return this.biodata.controls
  }

}
