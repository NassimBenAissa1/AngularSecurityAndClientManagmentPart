import { Injectable } from '@angular/core';
import { LoginDetails } from '../models/LoginDetails';
import { Personne } from '../models/Personne';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
authenticationDetails: LoginDetails
  token =''
  username =null
  role=null
  id?=null

}
