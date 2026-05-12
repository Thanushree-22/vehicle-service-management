import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController}
from '@ionic/angular';

import { ComponentService } from 'src/app/services/component';

import { Component as VehicleComponent } from 'src/app/models/component.model';


@Component({
  selector: 'app-components',
  templateUrl: './components.page.html',
  styleUrls: ['./components.page.scss'],
  standalone: false
})
export class ComponentsPage implements OnInit {

   components:
  VehicleComponent[] = [];

  isLoading: boolean = false;


  constructor(
    private componentService: ComponentService,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
     this.loadComponents();
  }

  loadComponents() {

    this.isLoading = true;

    this.componentService
      .getComponents()
      .subscribe({

        next: (response) => {

          this.components =
            response;

          this.isLoading = false;
        },

        error: (error) => {

          console.log(error);

          this.isLoading = false;
        }
      });
  }
async addComponent() {

    const alert =
      await this.alertController.create({

        header: 'Add Component',

        inputs: [

          {
            name: 'name',
            placeholder: 'Component Name'
          },

          {
            name: 'component_type',
            placeholder: 'Component Type'
          },

          {
            name: 'new_price',
            placeholder: 'New Price',
            type: 'number'
          },

          {
            name: 'repair_price',
            placeholder: 'Repair Price',
            type: 'number'
          },

          {
            name: 'stock_quantity',
            placeholder: 'Stock Quantity',
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

              const componentData = {
                ...data,

                new_price:
                  Number(data.new_price),

                repair_price:
                  Number(data.repair_price),

                stock_quantity:
                  Number(data.stock_quantity),

                is_repairable: true
              };

              this.componentService
                .createComponent(
                  componentData
                )
                .subscribe({

                  next: () => {

                    this.loadComponents();
                    this.showToast(
    'Component Added Successfully'
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
          }
        ]
      });

    await alert.present();
  }


  deleteComponent(id: number) {

    this.componentService
      .deleteComponent(id)
      .subscribe({

        next: () => {

          this.loadComponents();
          this.showToast(
    'Component Deleted'
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
