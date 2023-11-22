import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleMeetingValidatorsService } from '../../validators/schedule-meeting-validators.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CountriesService } from '../../../services';
import { Countrie } from '../../../shared/interfaces';
import { ContactService } from '../../../services';
import { ContactInformation } from '../../interfaces';
import * as dayjs from 'dayjs'
import { StatusResponse } from 'src/app/shared/enums/status-response';

@Component({
  selector: 'dialog-schedule-meeting',
  templateUrl: './dialog-schedule-meeting.component.html',
  styleUrls: ['./dialog-schedule-meeting.component.css']
})
export class DialogScheduleMeetingComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<DialogScheduleMeetingComponent>);
  private fb = inject( FormBuilder );
  private scheduleMeetingValidatorService = inject(ScheduleMeetingValidatorsService);
  private countrieService = inject(CountriesService);
  private contactService = inject(ContactService)

  public isSaving: boolean = false;
  public minDate = new Date();

  public formSchedule: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [ Validators.required, Validators.pattern(this.scheduleMeetingValidatorService.emailPattern) ]],
    codeCountryPhone: [''],
    phoneNumber: ['', [ Validators.required, Validators.minLength(9) ]],
    address: ['', (this.putAddressField) ? Validators.required : null],
    date: [new Date(), Validators.required],
    hour: ['', Validators.required]
  }, {
    validators: [
      this.scheduleMeetingValidatorService.isDateCorrect('date')
    ]
  });

  public countries: Countrie [] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public putAddressField: boolean){}

  ngOnInit(): void {
    this.countries = this.countrieService.getCountries();
    this.formSchedule.patchValue({
      codeCountryPhone: this.countries.find(x => x.code === 'EC')?.phoneCode
    });
  }

  isValidField(field: string) {
    return this.scheduleMeetingValidatorService.isValidField(this.formSchedule, field);
  }

  getErrorMessage(field: string): string | null {
    return this.scheduleMeetingValidatorService.getErrorMessage(this.formSchedule, field);
  }

  onSubmit(){
    this.isSaving = true;

    const { name, lastName, email, codeCountryPhone, phoneNumber, address, date, hour } = this.formSchedule.value;

    const cellphone = phoneNumber[0] == "0" ? phoneNumber.slice(1, phoneNumber.lenght) : phoneNumber;

    const data: ContactInformation = {
      name,
      lastName,
      email,
      address,
      cellphone: `${codeCountryPhone}${cellphone}`,
      dateSchedule: dayjs(date).format("DD/MM/YYYY"),
      hourSchedule: hour
    }

    this.contactService.saveScheduleMessage(data).subscribe(res => {
      this.isSaving = false;
      this.dialogRef.close({
        result: res.statusResponse == StatusResponse.OK,
        message: res.data,
        icon: (res.statusResponse == StatusResponse.OK) ? 'fa-solid fa-check' : 'fa-solid fa-xmark'
      });
    });
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
