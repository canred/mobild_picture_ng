// filepath: d:\GitHub\mobild_picture_ng\mobile_app\src\app\components\file-upload\file-upload.component.ts
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    },
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => FileUploadComponent),
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor, MatFormFieldControl<File>, Validator, OnInit {
  static nextId = 0;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() disabled: boolean;
  @Input() value: File | null;
  stateChanges = new Subject<void>();
  id = `file-upload-${FileUploadComponent.nextId++}`;
  focused = false;
  errorState = false;
  controlType = 'file-upload';
  autofilled?: boolean;

  // 新增的成員
  ngControl: any = null;
  get empty(): boolean {
    return !this.value;
  }
  get shouldLabelFloat(): boolean {
    return this.focused || !this.empty;
  }

  constructor() {
    this.placeholder = '';
    this.required = false;
    this.disabled = false;
    this.value = null;
  }

  ngOnInit(): void {}

  onChange = (value: File | null) => {};
  onTouched = () => {};

  writeValue(value: File | null): void {
    this.value = value;
    this.stateChanges.next();
  }

  registerOnChange(fn: (value: File | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.value = input.files[0];
      this.onChange(this.value);
      this.onTouched();
      this.stateChanges.next();
    }
  }

  // 新增的方法
  setDescribedByIds(ids: string[]): void {
    const controlElement = document.getElementById(this.id);
    if (controlElement) {
      controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
  }

  onContainerClick(event: MouseEvent): void {
    const input = document.getElementById(this.id);
    if (input) {
      input.click();
    }
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }
}