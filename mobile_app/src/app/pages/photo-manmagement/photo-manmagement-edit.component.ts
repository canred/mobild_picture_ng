import { AfterViewInit, Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service_Album } from 'src/app/services/album.service';
import { Album_Model } from 'src/app/models/album.model';
import { ToastrService } from 'ngx-toastr';

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-photo-manmagement-edit',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './photo-manmagement-edit.html',
})

export class AppPhotoMamagementEditComponent implements AfterViewInit {

  public form: FormGroup;
  constructor(private service_album: Service_Album, private fb: FormBuilder,private toastr: ToastrService) {
    this.form = this.fb.group({
      photo_name: ['', Validators.required],
      photo_desc: [''],
      photo_order: ['', [ Validators.required]],
      photo_updateAt: [''],
      defalut_photo_url: [''],
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
      this.toastr.error(`Invalid fields: ${invalidFields.join(', ')}`);
    }else{
      const album: Album_Model = this.form.value;
      this.service_album.update_album(album).subscribe(
        (response) => {
          this.toastr.success('Update Album successfully');
          window.history.back();
        },
        (error) => {
          this.toastr.error('Error in Update Album');
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
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('_id');
    if (albumId) {
      try {
        const user = await this.service_album.get_album_by_id(albumId);
        this.form.patchValue(user as any);
      } catch (error) {
        this.toastr.error('Error fetching album data');
      }
    }else{
      this.toastr.warning('Album not found');
    }
  }
}

