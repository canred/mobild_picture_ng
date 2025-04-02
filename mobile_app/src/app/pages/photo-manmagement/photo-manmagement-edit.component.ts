import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service_Album } from 'src/app/services/album.service';
import { Album_Model } from 'src/app/models/album.model';
import { ToastrService } from 'ngx-toastr';
import { FileUploadComponent } from "../../components/file-upload/file-upload.component";

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-photo-manmagement-edit',
  imports: [MaterialModule, ReactiveFormsModule, FileUploadComponent],
  templateUrl: './photo-manmagement-edit.html',
})

export class AppPhotoMamagementEditComponent implements AfterViewInit , OnInit {
  public photo_url:any;
  public form: FormGroup;
  ngOnInit(): void {
    // 手動觸發變更檢測
    try{
      this.cdr.detectChanges();
    }catch(e){}
  }
  defalut_photo_url2: string|number|null;
  constructor(private service_album: Service_Album, private fb: FormBuilder,private toastr: ToastrService,private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      photo_name: ['', Validators.required],
      photo_desc: [''],
      photo_order: ['', [ Validators.required]],
      photo_updateAt: [''],
      defalut_photo_url: [''],
      defalut_photo: [''],
      _id: [''],
      file:[null]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        file: file
      });
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      const invalidFields = [];
      for (const control in this.form.controls) {
        if (this.form.controls[control].invalid) {
          invalidFields.push(control);
        }
      }
      this.toastr.error(`Invalid fields: ${invalidFields.join(', ')}`);
    } else {
      const album: Album_Model = this.form.value;
      debugger;
      const file: File = this.form.get('file')!.value;
      this.service_album.update_album(album, file).subscribe(
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

