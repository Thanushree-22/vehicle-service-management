import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { EmptyStateComponent } from './components/empty-state/empty-state.component';

import { StatsCardComponent } from './components/stats-card/stats-card.component';


@NgModule({

  declarations: [

    HeaderComponent,

    SidebarComponent,

    LoadingSpinnerComponent,

    EmptyStateComponent,

    StatsCardComponent
  ],

  imports: [

    CommonModule,

    IonicModule,

    RouterModule
  ],

  exports: [

    HeaderComponent,

    SidebarComponent,

    LoadingSpinnerComponent,

    EmptyStateComponent,

    StatsCardComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class SharedModule {}