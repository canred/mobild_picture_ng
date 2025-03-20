import { Service_System } from './../../services/system.service';
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

  chartOption: any = {
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
    series: []
  };
  constructor(private toastr: ToastrService,private service_System:Service_System) {
  }

  public selectedTabIndex : number = 0;
  async ngAfterViewInit(): Promise<void> {

  }

  async onTabChanged(event: any) {
    if(this.selectedTabIndex==1){
      if(this.chartOne==undefined){
        this.chartOne = echartsInit(this.chart.nativeElement);
      }

      let d = await this.service_System.get_disk_info();
      this.chartOption.series = [];
      d?.forEach((disk) => {

        this.chartOption.series.push({
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
            offsetCenter: [0, '-200%'],
            fontSize: 14,
            color: '#FFF'
          },
          detail: {
            formatter: '{value}%',
            offsetCenter: [0, '-200%'],
            fontSize: 20,
            color: '#333'
          },
          data: [{ value: parseInt( disk.usageRate), name: disk.disk_name+'使用率' }]
        });
      });
      this.chartOne.setOption(this.chartOption);
    }
  }
 }


