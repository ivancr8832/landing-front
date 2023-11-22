import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import * as dayjs from 'dayjs'
import { TypeErrors } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ScheduleMeetingValidatorsService {

  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  public isValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  getErrorMessage(form: FormGroup, field: string): string | null {
    if (!form.controls[field]) return null;
    const errors = form.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case TypeErrors.REQUIRED:
          return 'Este campo es requerido';
        case TypeErrors.DIFERENCE_DAY:
          return errors[TypeErrors.DIFERENCE_DAY];
        case TypeErrors.PATTERN:
          return 'El formato de correo es inválido';
        case TypeErrors.MIN_LENGTH:
          return `Mínimo ${ errors['minlength'].requiredLength } caracteres.`;
      }
    }

    return null;
  }

  public isDateCorrect(dateField: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const date = dayjs(formGroup.get(dateField)?.value);
      const today = dayjs(new Date());

      if (date.isBefore(today, 'day')) {
        formGroup.get(dateField)?.setErrors({ differentDate: 'La fecha tiene que ser igual o mayor a la fecha de hoy' });
        return { differentDate: 'La fecha tiene que ser igual o mayor a la fecha de hoy' };
      }

      formGroup.get(dateField)?.setErrors(null);
      return null;
    }
  }
}
