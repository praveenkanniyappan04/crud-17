import { CanActivateFn,Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userCheck=sessionStorage.getItem("userName")
  if(userCheck){
    return true;
  }
  else{
    return false;
  }
 
};
