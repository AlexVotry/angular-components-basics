import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModuleComponent } from './module/module.component';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { SharedModule } from '../shared/shared.module';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    ModuleComponent,
    ModsHomeComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
