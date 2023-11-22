import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyNumbers]'
})
export class OnlyNumbersDirective {

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const newValue = inputValue.replace(/[^0-9]/g, ''); // Remover caracteres que no sean números
    if (newValue !== inputValue) {
      input.value = newValue;
      input.dispatchEvent(new Event('input')); // Disparar evento de entrada para actualizar el modelo
    }
  }
}
