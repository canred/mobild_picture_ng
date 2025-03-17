import { AfterViewInit, Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { User_Model } from 'src/app/models/user.model';
import { Service_User } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-manmagement-edit',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './user-manmagement-edit.html',
})

export class AppUserMamagementEditComponent implements AfterViewInit {

  public form: FormGroup;
  constructor(private service_user: Service_User, private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.email]],
      createdAt: [''],
      updatedAt: [''],
      _id: [''],
    });
  }

  onSubmit(){

  }
  goBack() {
    window.history.back();
  }

  public onCancel() {

  }
  async ngAfterViewInit(): Promise<void> {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('_id');
    if (userId) {
      try {
        const user = await this.service_user.get_user_by_id(userId);
        this.form.patchValue(user as any);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  }
}

