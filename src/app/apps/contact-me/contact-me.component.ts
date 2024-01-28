import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactMeService } from './contact-me.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact-me.component.html',
  styles: [
    `.grid { display: grid },
     .validation-error{ color:red }
    `
],
})
export class ContactMeComponent implements OnInit {

  phoneRegex = /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/;
  formSubmitted = false;
  isDisabled = false;
  formSubmissionMessage = '';
  isError = false;

  form = new FormGroup({
    name: new  FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    phone: new FormControl('', [Validators.pattern(this.phoneRegex)]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });

  constructor(private contactMeService: ContactMeService) { }

  ngOnInit(): void {  }

  send(): void {
    this.formSubmitted = true;

    if (this.form.invalid) {
      this.formSubmissionMessage = 'Please enter a valid information';
      this.isError = true;
      this.resetMessage();
      return;
    }

    this.isDisabled = true;

    const { name, email, phone, subject, message } = this.form.value;

    var data = this.form.value;

    this.contactMeService.sendEmail(data).subscribe(
      response => {
        this.formSubmissionMessage = response.message;
        this.form.reset();
        this.form.markAsPristine();
        this.resetMessage();

        this.formSubmitted = false;
        this.isDisabled = false;
      },
      error => {
        this.formSubmissionMessage = error.message;
        this.isError = true;
        this.resetMessage();
        this.isDisabled = false;
      }
    );
  }

  resetMessage() : void {
    setTimeout(() => this.formSubmissionMessage = '', 5000)
  }

}
