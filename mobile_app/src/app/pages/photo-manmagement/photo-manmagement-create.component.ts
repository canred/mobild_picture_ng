import { AfterViewInit, Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Album_Model } from 'src/app/models/album.model';
import { Service_Album } from 'src/app/services/album.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-photo-manmagement-create',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './photo-manmagement-create.html',
})

export class AppphotoMamagementCreateComponent implements AfterViewInit {

  public form: FormGroup;
  constructor(private service_album: Service_Album, private fb: FormBuilder) {
    this.form = this.fb.group({
      photo_name: ['', Validators.required],
      photo_desc: [''],
      photo_order: ['', [ Validators.required]],
      photo_updateAt: [''],
      defalut_photo: [''],
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
      alert(`Invalid fields: ${invalidFields.join(', ')}`);
    }else{
      const album: Album_Model = this.form.value;
      this.service_album.create_album(album).subscribe(
        (response) => {
          alert('Create Album successfully');
          this.goBack();
        },
        (error) => {
          alert('Error in Create Album');
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

