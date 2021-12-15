import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile-badge',
  templateUrl: './client-profile-badge.component.html',
  styleUrls: ['./client-profile-badge.component.css']
})
export class ClientProfileBadgeComponent implements OnInit {

  constructor() { }
  @Input() clientName: string;

  ngOnInit(): void {
  }

}
