import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-retrieve-buttons',
  templateUrl: './client-retrieve-buttons.component.html',
  styleUrls: ['./client-retrieve-buttons.component.css']
})
export class ClientRetrieveButtonsComponent implements OnInit {

 @Output() deleteClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

  onDelete(){
    this.deleteClick.emit();
  }

}
