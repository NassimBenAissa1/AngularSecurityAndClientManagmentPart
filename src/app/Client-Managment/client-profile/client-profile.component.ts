import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
user: string;

  constructor() { }

  ngOnInit(): void {
     this.user = localStorage.getItem('username');
  }

}
