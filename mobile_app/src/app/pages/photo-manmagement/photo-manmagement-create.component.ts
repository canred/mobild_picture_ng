import { AfterViewInit, Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Album_Model } from 'src/app/models/album.model';
import { Service_Album } from 'src/app/services/album.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

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
  constructor(private service_album: Service_Album, private fb: FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      photo_name: ['', Validators.required],
      photo_desc: [''],
      photo_order: ['', [ Validators.required]],
      photo_updateAt: [''],
      defalut_photo_url: [''],
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
          this.toastr.success('Create Album successfully(2秒後返回)');
          of(null).pipe(delay(2000)).subscribe(() => {
            this.goBack();
          });
        },
        (error) => {
          this.toastr.error('Error in Create Album');
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

  }
}

