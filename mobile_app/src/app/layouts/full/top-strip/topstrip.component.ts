import { AfterViewInit, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconsModule } from 'angular-tabler-icons';
import { APP_CONFIG } from 'src/app/app-config';
@Component({
    selector: 'app-topstrip',
    imports: [TablerIconsModule, MatButtonModule, MatMenuModule],
    templateUrl: './topstrip.component.html',
})
export class AppTopstripComponent implements AfterViewInit {
    public title_name : string = '未設定';
    constructor() { }

    ngAfterViewInit() {
        this.title_name = APP_CONFIG.title_name;
        console.log('AppTopstripComponent ngAfterViewInit');
    }

}
