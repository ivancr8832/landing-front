import { Countrie } from './../../../shared/interfaces';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../../services/countries.service';
import { ScheduleMeetingValidatorsService } from '../../validators/schedule-meeting-validators.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackConfirmationComponent } from '../../components/snack-confirmation/snack-confirmation.component';
import { ContactService } from '../../../services';
import { Message } from '../../interfaces';
import { StatusResponse } from 'src/app/shared/enums/status-response';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private countrieService = inject(CountriesService);
  private scheduleMeetingValidatorService = inject(ScheduleMeetingValidatorsService);
  private snackBar = inject( MatSnackBar );
  private contactService = inject(ContactService);

  public countries: Countrie [] = [];
  public isSaving: boolean = false;

  public contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [ Validators.required, Validators.pattern(this.scheduleMeetingValidatorService.emailPattern) ]],
    codeCountryPhone: [''],
    phone: ['', [Validators.required, Validators.minLength(9)]],
    subject: ['', Validators.required],
    comment: ['', Validators.required]
  });

  ngOnInit(): void {
    this.countries = this.countrieService.getCountries();
    this.contactForm.patchValue({
      codeCountryPhone: this.countries.find(x => x.code === 'EC')?.phoneCode
    })
  }

  isValidField(field: string) {
    return this.scheduleMeetingValidatorService.isValidField(this.contactForm, field);
  }

  getErrorMessage(field: string): string | null {
    return this.scheduleMeetingValidatorService.getErrorMessage(this.contactForm, field);
  }

  onSubmit() {
    this.isSaving = true;
    const { name, lastName, email, codeCountryPhone, phone, subject, comment } = this.contactForm.value;
    const cellphone = phone[0] == "0" ? phone.slice(1, phone.lenght) : phone;

    const data: Message = {
      name,
      lastName,
      email,
      cellphone: `${codeCountryPhone}${cellphone}`,
      comment,
      subject
    };

    this.contactService.saveContact(data).subscribe(resp => {
      this.isSaving = false;
      this.snackBar.openFromComponent(SnackConfirmationComponent, {
        data: {
          result: resp.statusResponse === StatusResponse.OK,
          message: resp.data,
          icon: (resp.statusResponse === StatusResponse.OK) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'
        },
        duration: 4000,
        panelClass: 'success-snack',
        horizontalPosition: 'start',
        verticalPosition: 'bottom'
      });
    });
  }
}
