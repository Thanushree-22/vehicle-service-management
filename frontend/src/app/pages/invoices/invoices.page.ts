import { Component, OnInit } from '@angular/core';

import { AlertController, ToastController } from '@ionic/angular';

import { Invoice } from 'src/app/models/invoice.model';

import { Vehicle } from 'src/app/models/vehicle.model';

import { InvoiceService } from 'src/app/services/invoice';

import { VehicleService } from 'src/app/services/vehicle';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
  standalone:false
})
export class InvoicesPage implements OnInit {
   invoices: Invoice[] = [];

  vehicles: Vehicle[] = [];

  isLoading: boolean = false;

  constructor( private invoiceService:
    InvoiceService,

    private vehicleService:
    VehicleService,

    private alertController:
    AlertController,

    private toastController:
    ToastController) { }

  ngOnInit() {
    this.loadVehicles();

    this.loadInvoices();
  }

loadInvoices() {

    this.isLoading = true;

    this.invoiceService
      .getInvoices()
      .subscribe({

        next: (response) => {

          this.invoices =
            response;

          this.isLoading = false;
        },

        error: (error) => {

          console.log(error);

          this.isLoading = false;
        }
      });
  }

   loadVehicles() {

    this.vehicleService
      .getVehicles()
      .subscribe({

        next: (response) => {

          this.vehicles =
            response;
        },

        error: (error) => {

          console.log(error);
        }
      });
  }
 
  getVehicleNumber(
    vehicleId: number
  ): string {

    const vehicle =
      this.vehicles.find(
        v => v.id === vehicleId
      );

    return vehicle
      ? vehicle.vehicle_number
      : 'Unknown Vehicle';
  }

   async generateInvoice() {

    const alert =
      await this.alertController.create({

        header: 'Generate Invoice',

        inputs: [

          {
            name: 'issue_id',

            placeholder: 'Issue ID',

            type: 'number'
          }
        ],

        buttons: [

          {
            text: 'Cancel',

            role: 'cancel'
          },

          {
            text: 'Generate',

            handler: (data) => {

              this.invoiceService
                .generateInvoice(
                  Number(data.issue_id)
                )
                .subscribe({

                  next: () => {

                    this.loadInvoices();
                    this.showToast(
    'Invoice Generated Successfully'
  );
                  },

                  error: (error) => {

  this.showToast(
  'Failed to load invoices',
  'danger'
);
}
                });
            }
          }
        ]
      });

    await alert.present();
  }
  async showToast(
  message: string,
  color: string = 'success'
) {

  const toast =
    await this.toastController.create({

      message: message,

      duration: 2000,

      position: 'top',

      color: color
    });

  await toast.present();
}
}