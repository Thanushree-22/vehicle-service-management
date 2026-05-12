import { Component, OnInit } from '@angular/core';
import { AlertController,ToastController }
from '@ionic/angular';

import { Issue } from 'src/app/models/issue.model';

import { Vehicle } from 'src/app/models/vehicle.model';

import { Component as VehicleComponent } from 'src/app/models/component.model';

import { IssueService } from 'src/app/services/issue';
import { VehicleService } from 'src/app/services/vehicle';

import { ComponentService } from 'src/app/services/component';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.page.html',
  styleUrls: ['./issues.page.scss'],
  standalone:false
})
export class IssuesPage implements OnInit {

   issues: Issue[] = [];

  vehicles: Vehicle[] = [];

  components:
  VehicleComponent[] = [];

  isLoading: boolean = false;

  constructor(
    private issueService:
    IssueService,

    private vehicleService:
    VehicleService,

    private componentService:
    ComponentService,

    private alertController:
    AlertController,

    private toastController:
    ToastController

  ) { }

  ngOnInit( ) {
    this.loadVehicles();

    this.loadComponents();

    this.loadIssues();
  }

   loadIssues() {

    this.isLoading = true;

    this.issueService
      .getIssues()
      .subscribe({

        next: (response) => {

          this.issues =
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
        }
      });
  }

    loadComponents() {

    this.componentService
      .getComponents()
      .subscribe({

        next: (response) => {

          this.components =
            response;
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

  getComponentName(
    componentId: number
  ): string {

    const component =
      this.components.find(
        c => c.id === componentId
      );

    return component
      ? component.name
      : 'Unknown Component';
  }
 async addIssue() {

    const alert =
      await this.alertController.create({

        header: 'Add Issue',

        inputs: [

          {
            name: 'vehicle_id',
            placeholder: 'Vehicle ID',
            type: 'number'
          },

          {
            name: 'component_id',
            placeholder: 'Component ID',
            type: 'number'
          },

          {
            name: 'issue_description',
            placeholder:
              'Issue Description'
          },

          {
            name: 'service_type',
            placeholder:
              'Service Type'
          },

          {
            name: 'labor_cost',
            placeholder:
              'Labor Cost',

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

              const issueData = {

                vehicle_id:
                  Number(data.vehicle_id),

                component_id:
                  Number(data.component_id),

                issue_description:
                  data.issue_description,

                service_type:
                  data.service_type,

                labor_cost:
                  Number(data.labor_cost)
              };
              this.issueService
                .createIssue(
                  issueData
                )
                .subscribe({

                  next: () => {

                    this.loadIssues();
                    this.showToast(
    'Issue Added Successfully'
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


  deleteIssue(id: number) {

    this.issueService
      .deleteIssue(id)
      .subscribe({

        next: () => {

          this.loadIssues();
          this.showToast(
    'Issue Deleted'
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


  updateStatus(
    issue: Issue,
    status: string
  ) {

    this.issueService
      .updateIssueStatus(
        issue.id!,
        status
      )
      .subscribe({

        next: () => {

          this.loadIssues();
          this.showToast(
    'Issue Status Updated'
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
