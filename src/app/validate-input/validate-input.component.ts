import { Component } from '@angular/core';
import { checkIsEasy, checkIsMedium, checkIsStrong } from 'src/utils/validatePassword';

@Component({
  selector: 'validate-input',
  templateUrl: './validate-input.component.html',
  styleUrls: ['./validate-input.component.css']
})
export class ValidateInputComponent {
  value = ''

  isEasy = false;
  isMedium = false;
  isStrong = false;

  changeValue($event: Event) {
    const input = $event.target as HTMLInputElement;
    this.value = input.value;
    this.checkPasswordStrength(input.value);
  }

  checkPasswordStrength(value: string) {
    if (this.value === "") {
      this.isEasy = false;
      this.isMedium = false;
      this.isStrong = false;
      return;
    }
    if (checkIsEasy(value)) {
      this.isEasy = true;
      this.isMedium = false;
    } else if (checkIsMedium(value)) {
      this.isMedium = true;
      this.isEasy = false;
      this.isStrong = false;
    } else if (checkIsStrong(value)) {
      this.isStrong = true;
      this.isMedium = false;
    }
  }

  get inputClasses() {
    return {
      'empty': this.value.length === 0,
      'red': this.value.length > 0 && this.value.length < 8,
      "green": this.isStrong && this.value.length >= 8
    }
  }
}
