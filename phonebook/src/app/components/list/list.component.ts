import { Component, OnInit } from '@angular/core';
import { NewContactModel } from '../../models/contact.model';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { MatTableDataSource } from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  aContacts: NewContactModel[] = [];
  displayedColumns = ['name', 'lastName', 'phone', 'actions'];

  constructor(  private sContacts: ContactsService,
                private router: Router ) { }

  ngOnInit() {

    // BACKEND communication test
    // this.sContacts.getContacts().subscribe((data) => {
    //   console.dir(data);
    // });

    this.getContacts();

  }

  createContact( ) {
    this.router.navigate([`/create`]);
  }

  getContacts() {
    this.sContacts.getContacts().subscribe(( data: NewContactModel[] ) => {
      this.aContacts = data;
      console.log( 'Data requested ...' );
      console.dir( this.aContacts );
    });
  }

  editContact( id: string ) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteContact( id: string ) {
    this.sContacts.deleteContact(id).subscribe(() => {
      this.getContacts();
    });
  }

}
