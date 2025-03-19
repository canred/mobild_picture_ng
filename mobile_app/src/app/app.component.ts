import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
// import echarts core
import * as echarts from 'echarts/core';
// import necessary echarts components
import { BarChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, GridComponent, CanvasRenderer]);

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    //providers: [provideEchartsCore(echarts)],
})
export class AppComponent {
  title = 'Modernize Angular Admin Tempplate';
}
