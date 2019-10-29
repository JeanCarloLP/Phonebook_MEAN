import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts/contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private contacts: ContactsService ) { }

  ngOnInit() {
    this.contacts.getContacts().subscribe((data) => {
      console.dir(data);
    });
  }

}
