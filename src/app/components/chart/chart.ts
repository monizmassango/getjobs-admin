import { ChartConfiguration, ChartOptions } from 'chart.js';

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './chart.html',
  styleUrl: './chart.scss'
})
export class Chart {
  isBrowserOnly: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowserOnly = isPlatformBrowser(this.platformId);
  }

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false }
    },
    scales: {
      x: {
        grid: { display: false }
      },
      y: {
        min: 20,
        max: 100,
        ticks: {
          callback: (value) => value + '%'
        }
      }
    }
  };

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: Array(20).fill(''),
    datasets: [
      {
        data: [65, 55, 98, 67, 49, 95, 66, 67, 49, 95, 66, 67, 49, 95, 66, 67, 49, 95, 66, 55],
        backgroundColor: '#396D85',
        borderRadius: 4,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      }
    ]
  };
}
