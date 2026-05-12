import { Component, OnInit } from '@angular/core';

import { RevenueService } from 'src/app/services/revenue';

import {
  DailyRevenue,
  MonthlyRevenue,
  Revenue,
  YearlyRevenue
}
from 'src/app/models/revenue.model';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.page.html',
  styleUrls: ['./revenue.page.scss'],
  standalone:false
})
export class RevenuePage implements OnInit {

   totalRevenue: number = 0;

  dailyRevenue:
  DailyRevenue[] = [];

  monthlyRevenue:
  MonthlyRevenue[] = [];

  yearlyRevenue:
  YearlyRevenue[] = [];

  isLoading: boolean = false;
  revenueChart: any;

  constructor(
    private revenueService: RevenueService
  ) { }

  ngOnInit() {
    this.loadRevenueData();
  }
 loadRevenueData() {

    this.isLoading = true;


    this.revenueService
      .getTotalRevenue()
      .subscribe({

        next: (response) => {

          this.totalRevenue =
            response.revenue;
        }
      });


    this.revenueService
      .getDailyRevenue()
      .subscribe({

        next: (response) => {

          this.dailyRevenue =
            response;
        }
      });
 this.revenueService
  .getMonthlyRevenue()
  .subscribe({

    next: (response) => {

      this.monthlyRevenue =
        response;

      this.createChart();
    }
  });

    this.revenueService
      .getYearlyRevenue()
      .subscribe({

        next: (response) => {

          this.yearlyRevenue =
            response;

          this.isLoading = false;
        },
error: (error) => {

          console.log(error);

          this.isLoading = false;
        }
      });
  }

  getMonthName(
  month: number
): string {

  const months = [

    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return months[month - 1];
}

createChart() {

  if (this.revenueChart) {

    this.revenueChart.destroy();
  }

  const labels =
    this.monthlyRevenue.map(
      item =>
        this.getMonthName(
          item.month
        )
    );

  const values =
    this.monthlyRevenue.map(
      item =>
        item.revenue
    );

  setTimeout(() => {

    this.revenueChart =
      new Chart(
        'revenueChart',
        {

          type: 'bar',

          data: {

            labels: labels,

            datasets: [

              {
                label:
                  'Monthly Revenue',

                data: values,

                borderRadius: 12,

               backgroundColor: [

               '#7c3aed'
                ]
              }
            ]
          },

          options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

              legend: {

                display: false
              }
            },

            scales: {

              y: {

                beginAtZero: true
              }
            }
          }
        }
      );

  }, 300);
}
}
