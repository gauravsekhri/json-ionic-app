import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImagePagePageRoutingModule } from './image-page-routing.module';

import { ImagePagePage } from './image-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImagePagePageRoutingModule
  ],
  declarations: [ImagePagePage]
})
export class ImagePagePageModule {}
