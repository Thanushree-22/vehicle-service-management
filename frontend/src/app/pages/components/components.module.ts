import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentsPageRoutingModule } from './components-routing.module';

import { ComponentsPage } from './components.page';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsPageRoutingModule,
    SharedModule
],
  declarations: [ComponentsPage]
})
export class ComponentsPageModule {}
