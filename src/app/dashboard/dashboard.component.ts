import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexPlotOptions, ApexDataLabels, ApexStroke } from 'ng-apexcharts';
// import { ChartOptions } from '../market/market.component';
import { Order } from '../objects/order';
import { DataService } from '../services/data.service';

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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  uid: any;
  uname: any;
  uemail: any;
  upic: any;

  @ViewChild("chart", { static: true }) chart: ChartComponent;
  //public chartOptions: Partial<ChartOptions>;
  public chartCandleOptions: Partial<ChartOptions>;
  public chartBarOptions: Partial<ChartOptions>;
  // date = new Date();  
  // todate :any;
  date: any;
  enddate: any;
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
  enable: boolean;

  constructor(private cookie: CookieService,
    private dataservice: DataService,
    public router: Router) {

      this.enable = false;
    this.uname = this.cookie.get('uname');
    this.uemail = this.cookie.get('uemail');
    this.uid = this.cookie.get('upic');

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

  ngOnInit() {

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
          this.seriesDataLinear.push({
            'x': element.start,
            'y': [element.volume]
          });
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
        this.enable = true;
      });
    });
  }

  logout() {
    this.cookie.deleteAll();
    this.router.navigateByUrl('/home');
  }

  //redirects to Profile page of user.
  goToViewProfile(pageName) {
    this.router.navigate([`${pageName}`]);
  }

}
