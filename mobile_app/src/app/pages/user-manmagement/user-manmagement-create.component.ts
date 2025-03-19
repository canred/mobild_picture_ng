import { AfterViewInit, Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { User_Model } from 'src/app/models/user.model';
import { Service_User } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-user-manmagement-create',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './user-manmagement-create.html',
})

export class AppUserMamagementCreateComponent implements AfterViewInit {

  public form: FormGroup;
  constructor(private service_user: Service_User, private fb: FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      createdAt: [''],
      updatedAt: [''],
      _id: [''],
    });
  }

  onSubmit(){


    if (!this.form.valid) {
      const invalidFields = [];
      for (const control in this.form.controls) {
        if (this.form.controls[control].invalid) {
          invalidFields.push(control);
        }
      }
      this.toastr.error('Invalid fields: ' + invalidFields.join(', '));
    }else{
      const user: User_Model = this.form.value;
      debugger;
      this.service_user.create_user(user).subscribe(
        (response) => {
          this.toastr.success('User registered successfully');
        },
        (error) => {
          this.toastr.error('Error registering user');
        }
      );
    }


  }

  goBack() {
    window.history.back();
  }

  public onCancel() {

  }
  async ngAfterViewInit(): Promise<void> {
    // const urlParams = new URLSearchParams(window.location.search);
    // const userId = urlParams.get('_id');
    // if (userId) {
    //   try {
    //     const user = await this.service_user.get_user_by_id(userId);
    //     this.form.patchValue(user as any);
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // }
  }
}

