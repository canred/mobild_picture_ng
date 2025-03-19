import { AfterViewInit, Component, ElementRef, ViewChild, viewChild, viewChildren } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { User_Model } from 'src/app/models/user.model';
import { PhotoManmagementTableComponent } from 'src/app/components/photo-manmagement-table/photo-manmagement-table.component';
import { ToastrService } from 'ngx-toastr';
import { EChartsCoreOption } from 'echarts/core';
import { EChartsOption } from 'echarts/types/dist/shared';
import { NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
import { ECharts , init as echartsInit } from 'echarts';

@Component({
  selector: 'app-photo-manmagement',
  imports: [MaterialModule,PhotoManmagementTableComponent,NgxEchartsModule],
  templateUrl: './photo-manmagement.html',
})

export class AppPhotoMamagementComponent implements AfterViewInit {


  @ViewChild("echarts", { static: true }) chart!: ElementRef<HTMLDivElement>;

  private chartOne : ECharts;
  chartOption: EChartsOption = {
    title: {
      text: '存儲使用空間',
      left: 'center',
      textStyle: {
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
      backgroundColor: 'rgba(50, 50, 50, 0.7)',
      textStyle: {
        color: '#fff'
      }
    },
    series: [
      {
        name: '磁碟使用率',
        type: 'gauge',
        axisLine: {
          lineStyle: {
            color: [[0.2, '#91c7ae'], [0.8, '#63869e'], [1, '#c23531']],
            width: 15
          }
        },
        axisLabel: {
          color: '#333',
          fontSize: 12
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'auto'
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'auto'
          }
        },
        pointer: {
          width: 5
        },
        title: {
          offsetCenter: [0, '-30%'],
          fontSize: 14,
          color: '#333'
        },
        detail: {
          formatter: '{value}%',
          fontSize: 20,
          color: '#333'
        },
        data: [{ value: 50, name: '使用率' }]
      }
    ]
  };
  constructor(private toastr: ToastrService) {
  }

  public selectedTabIndex : number = 0;
  async ngAfterViewInit(): Promise<void> {

  }

  onTabChanged(event: any) {
    if(this.selectedTabIndex==1){
      if(this.chartOne==undefined){
        this.chartOne = echartsInit(this.chart.nativeElement);
      }
      this.chartOne.setOption(this.chartOption);
    }
  }
 }


