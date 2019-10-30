import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewContactModel } from '../../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private url = 'http://localhost:4000/phonebook/contacts';

  constructor( private http: HttpClient ) { }

  // Get contacts
  getContacts() {
    return this.http.get(`${this.url}`);
  }

  // Get contact by id
  getContactById( id: string ) {
    return this.http.get(`${this.url}/${id}`);
  }

  // Create new contact
  addContact( contact: NewContactModel ) {
    const newContact = {
      ...contact
    };
    return this.http.post( `${this.url}/add`, newContact );
  }

  // Update contact
  updateContact( contact: NewContactModel, id: string ) {
    const contactUpdated = {
      ...contact
    };
    return this.http.post( `${this.url}/update/${id}`, contactUpdated );
  }

  // Delete contact by id
  deleteContact( id: string ) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

}
