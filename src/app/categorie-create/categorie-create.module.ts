import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieCreatePageRoutingModule } from './categorie-create-routing.module';

import { CategorieCreatePage } from './categorie-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieCreatePageRoutingModule
  ],
  declarations: [CategorieCreatePage]
})
export class CategorieCreatePageModule {}
