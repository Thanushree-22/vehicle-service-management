import { Component, OnInit } from '@angular/core';

import { Vehicle } from 'src/app/models/vehicle.model';

import { VehicleService } from 'src/app/services/vehicle';

import { AlertController,ToastController} from '@ionic/angular';




@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.page.html',
  styleUrls: ['./vehicles.page.scss'],
  standalone: false
})
export class VehiclesPage implements OnInit {

   vehicles: Vehicle[] = [];

  isLoading: boolean = false;

  constructor(
    private vehicleService: VehicleService,

    private alertController: AlertController,
    private toastController: ToastController

  ) { }

  ngOnInit() {

    this.loadVehicles();
  }

 loadVehicles() {

    this.isLoading = true;

    this.vehicleService
      .getVehicles()
      .subscribe({

        next: (response) => {

          this.vehicles = response;

          this.isLoading = false;
        },

        error: (error) => {

          console.log(error);

          this.isLoading = false;
        }
      });
    }
    
     async addVehicle() {

    const alert =
      await this.alertController.create({

        header: 'Add Vehicle',

        inputs: [

          {
            name: 'vehicle_number',
            placeholder: 'Vehicle Number'
          },

          {
            name: 'owner_name',
            placeholder: 'Owner Name'
          },

          {
            name: 'brand',
            placeholder: 'Brand'
          },

          {
            name: 'model',
            placeholder: 'Model'
          },

          {
            name: 'year',
            placeholder: 'Year',
            type: 'number'
          }
        ],

        buttons: [

          {
            text: 'Cancel',
            role: 'cancel'
          },

          {
            text: 'Save',

            handler: (data) => {

              const vehicleData = {

              vehicle_number: data.vehicle_number,

              owner_name: data.owner_name,

              brand: data.brand,

              model: data.model,

              year: Number(data.year)
          };

              this.vehicleService
                .createVehicle(vehicleData)
                .subscribe({

                  next: () => {

                    this.loadVehicles();
                    this.showToast(
    'Vehicle Added Successfully'
  );
                  },

                  error: (error) => {

                    this.showToast(
  'Something went wrong',
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


  deleteVehicle(id: number) {

    this.vehicleService
      .deleteVehicle(id)
      .subscribe({

        next: () => {

          this.loadVehicles();

         this.showToast(
    'Vehicle Deleted'
  );
        },

        error: (error) => {

  this.showToast(

    error?.error?.detail ||
    'Something went wrong',

    'danger'
  );
}
      });
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
