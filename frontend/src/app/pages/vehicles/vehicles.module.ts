import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesPageRoutingModule } from './vehicles-routing.module';

import { VehiclesPage } from './vehicles.page';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiclesPageRoutingModule,
    SharedModule
],
  declarations: [VehiclesPage]
})
export class VehiclesPageModule {}
