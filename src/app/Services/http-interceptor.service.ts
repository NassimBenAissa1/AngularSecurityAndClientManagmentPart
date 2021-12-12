import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private global : GlobalService
  ) { }
  intercept(request, next){
    let token = this.global.token ;
    let tokenizedRequest = request.clone({
      setHeaders : {
        Authorization : localStorage.getItem('token'),
        "Content-Type" : "application/json" 
      }
    })
      return next.handle(tokenizedRequest);
  }
}
