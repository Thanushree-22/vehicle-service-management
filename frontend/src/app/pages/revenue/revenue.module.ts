import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevenuePageRoutingModule } from './revenue-routing.module';

import { RevenuePage } from './revenue.page';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevenuePageRoutingModule,
    SharedModule
],
  declarations: [RevenuePage]
})
export class RevenuePageModule {}
