import { Component, OnInit } from '@angular/core';
import { VehicleService} from 'src/app/services/vehicle';

import { IssueService } from 'src/app/services/issue';

import { InvoiceService } from 'src/app/services/invoice';

import { RevenueService } from 'src/app/services/revenue';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
   totalRevenue:
  number = 0;

  totalVehicles:
  number = 0;

  pendingIssues:
  number = 0;

  totalInvoices:
  number = 0;

  recentIssues: any[] = [];


  constructor(
    private vehicleService:
    VehicleService,

    private issueService:
    IssueService,

    private invoiceService:
    InvoiceService,

    private revenueService:
    RevenueService,

    private router: Router
  ) { }

  ngOnInit() {
    this.loadDashboardData();
  }
   loadDashboardData() {

    this.vehicleService
      .getVehicles()
      .subscribe({

        next: (response) => {

          this.totalVehicles =
            response.length;
        }
      });


    this.issueService
  .getIssues()
  .subscribe({

    next: (response) => {

      this.pendingIssues =
        response.filter(
          issue =>
            issue.status ===
            'PENDING'
        ).length;

      this.recentIssues =
        response
          .slice(-3)
          .reverse();
    }
  });
this.invoiceService
      .getInvoices()
      .subscribe({

        next: (response) => {

          this.totalInvoices =
            response.length;
        }
      });


    this.revenueService
      .getTotalRevenue()
      .subscribe({

        next: (response) => {

          this.totalRevenue =
            response.revenue;
        }
      });
  }
  goToRevenue() {

  this.router.navigate([
    '/revenue'
  ]);
}


goToVehicles() {

  this.router.navigate([
    '/vehicles'
  ]);
}


goToIssues() {

  this.router.navigate([
    '/issues'
  ]);
}


goToInvoices() {

  this.router.navigate([
    '/invoices'
  ]);
}
}
