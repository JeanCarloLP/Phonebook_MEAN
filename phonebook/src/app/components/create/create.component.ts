import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NewContactModel } from 'src/app/models/contact.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  private myPattern: RegExp = /1?-?\.?\(?\d{2}[\-\)\.\s]?\d{2}[\-\.\s]?\d{6}/;

  newContact: NewContactModel = {
    name: '',
    lastName: '',
    phone: ''
  };

  constructor(  private sContacts: ContactsService,
                private router: Router,
                private fb: FormBuilder ) { }

  ngOnInit() {
    this.createForm =  this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastName: ['', Validators.required],
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.myPattern)]))
    });
  }

  addContact( name: string, lastName: string, phone: string ) {
    this.newContact.name = name;
    this.newContact.lastName = lastName;
    this.newContact.phone = phone;

    this.sContacts.addContact(this.newContact).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
