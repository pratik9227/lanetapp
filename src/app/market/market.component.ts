import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexDataLabels,
  ApexStroke
} from "ng-apexcharts";
import { Order } from '../objects/order';
import * as moment from 'moment';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
};

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})

export class MarketComponent implements OnInit {
  @ViewChild("chart", { static: true }) chart: ChartComponent;
  //public chartOptions: Partial<ChartOptions>;
  public chartCandleOptions: Partial<ChartOptions>;
  public chartBarOptions: Partial<ChartOptions>;
  // date = new Date();  
  // todate :any;
  curlist: any;
  curlist2: any;
  orders: Order = {
    ctype: '',
    ctime: '',
    startDate: new Date().toDateString(),
    endDate: new Date()
  }
  chartSeries: any = [];
  seriesDataLinear: any = [];

  constructor(private dataservice: DataService, public router: Router) {
    console.log("Start constructor")
    console.log("set candle stick options")
    this.chartCandleOptions = {
      series: [
        {
          name: "candle",
          data: this.chartSeries
        }
      ],
      chart: {
        type: "candlestick",
        height: 300,
        id: "candles",
        toolbar: {
          autoSelected: "pan",
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: "#3C90EB",
            downward: "#DF7D46"
          }
        }
      },
      xaxis: {
        type: "datetime"
      }
    };

    console.log("set bar options")
    this.chartBarOptions = {
      series: [
        {
          name: "volume",
          data: this.seriesDataLinear
        }
      ],
      chart: {
        height: 160,
        type: "bar",
        brush: {
          enabled: true,
          target: "candles"
        },
        selection: {
          enabled: true,
          xaxis: {
            // min: new Date("20 Jan 2017").getTime(),
            // max: new Date("10 Dec 2017").getTime()
          },
          fill: {
            color: "#ccc",
            opacity: 1
          },
          stroke: {
            color: "#0D47A1"
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: "80%",
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: "#F15B46"
              },
              {
                from: 1,
                to: 10000,
                color: "#FEB019"
              }
            ]
          }
        }
      },
      stroke: {
        width: 1
      },
      xaxis: {
        type: "datetime",
        axisBorder: {
          offsetX: 13
        }
      },
      yaxis: {
        labels: {
          show: true
        }
      }
    };

    console.log("set candle options in generateDayWiseTime method")
    this.chartCandleOptions.series = [{
      data: this.chartSeries
    }];

    console.log("Set bar options in generateDayWiseTime method")
    this.chartBarOptions.series = [{
      data: this.seriesDataLinear
    }];

  }

  // public generateDayWiseTimeSeries(baseval, count, yrange) {
  //   debugger
  //   console.log("Start generateDayWiseTime method")
  //   var i = 0;
  //   var series = [];
  //   while (i < count) {
  //     var y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

  //     series.push([baseval, y]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }

  async ChartData() {
    console.log("Start update series method")
    // -------------- Candle and Bar chart data get here -------------------------------------------
    await this.dataservice.instrumentstwo().subscribe((clist: any) => {
      console.log("Setting timeout on")
      //setTimeout(() => {
        //his.display = ""
        console.log("Setting into timeout section")
        let data = clist.data.data;
        data.forEach(element => {
          this.chartSeries.push({
            'x': element.start,
            'y': [element.open, element.high, element.low, element.close]
          });
          this.seriesDataLinear.push(element.volume);
          // console.log('seriesDataLinear---->',this.seriesDataLinear)
        //}, 4000);
        this.chartCandleOptions.series = [{
          data: this.chartSeries
        }];
        // console.log("Set bar options in generateDayWiseTime method")
        // this.chartBarOptions.series = [{
        //   data: this.seriesDataLinear
        // }];
        console.log("Setting timeout off")
      });
    });
  }

  ngOnInit() {
    // debugger
    //get a list of currency type
    console.log("Start ngOnInit method")
    this.dataservice.instruments().subscribe((clist: any) => {
      this.curlist = clist.data.pairs;
      if (this.curlist.btc_usd) {
        this.orders.ctype = this.curlist.btc_usd.baseAsset + "_" + this.curlist.btc_usd.quoteAsset;
      }
      this.orders.ctime = '1h';
    });
    console.log("Set parameters from API")
    //get a list of order history
    // this.dataservice.instrumentstwo().subscribe((clist: any) => {
    //   let data = clist.data.data;
    //   data.forEach(element => {
    //     this.chartSeries.push({
    //       'x': element.start,
    //       'y': [element.open, element.high, element.low, element.close]
    //     });
    //     this.seriesDataLinear.push(element.volume);
    //   });
    // });
    this.ChartData();
  }

  goToViewProfile(pageName) {
    this.router.navigate([`${pageName}`]);
  }
}
