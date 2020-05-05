import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieEditPageRoutingModule } from './categorie-edit-routing.module';

import { CategorieEditPage } from './categorie-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieEditPageRoutingModule
  ],
  declarations: [CategorieEditPage]
})
export class CategorieEditPageModule {}
