import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts/contacts.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { NewContactModel } from 'src/app/models/contact.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  private myPattern: RegExp = /1?-?\.?\(?\d{2}[\-\)\.\s]?\d{2}[\-\.\s]?\d{6}/;

  id: string;
  contactBeforeUpdate: any;
  contactAfterUpdate: NewContactModel = {
    name: '',
    lastName: '',
    phone: ''
  };
  updateForm: FormGroup;

  constructor(  private sContacts: ContactsService,
                private router: Router,
                private route: ActivatedRoute,
                private snackBar: MatSnackBar,
                private fb: FormBuilder ) { }

  ngOnInit() {
    this.createForm();

    this.route.params.subscribe( params => {
      this.id = params.id;
      this.sContacts.getContactById(this.id).subscribe( res => {
        this.contactBeforeUpdate = res;
        this.updateForm.get('name').setValue(this.contactBeforeUpdate.name);
        this.updateForm.get('lastName').setValue(this.contactBeforeUpdate.lastName);
        this.updateForm.get('phone').setValue(this.contactBeforeUpdate.phone);
      });
    });
  }

  createForm() {
    this.updateForm =  this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.myPattern)]))
    });
  }

  updateContact( name: string, lastName: string, phone: string, id: string) {
    this.contactAfterUpdate.name = name;
    this.contactAfterUpdate.lastName = lastName;
    this.contactAfterUpdate.phone = phone;

    this.sContacts.updateContact(this.contactAfterUpdate, this.id).subscribe(() => {
      this.snackBar.open('Contact updated successfully', 'OK', {
        duration: 3000
      });
    });
  }
}
