import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor( private contacts: ContactsService ) { }

  ngOnInit() {
  }

}
