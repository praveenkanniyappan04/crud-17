import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { UserTableComponent } from './user-table/user-table.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:RegisterFormComponent},
  {path:'sign-in',component:SignFormComponent},
  {path:'user',component:UserTableComponent,canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
