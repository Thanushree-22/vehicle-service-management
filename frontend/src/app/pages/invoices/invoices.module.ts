import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicesPageRoutingModule } from './invoices-routing.module';

import { InvoicesPage } from './invoices.page';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicesPageRoutingModule,
    SharedModule
],
  declarations: [InvoicesPage]
})
export class InvoicesPageModule {}
