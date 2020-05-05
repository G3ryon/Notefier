import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorieListPageRoutingModule } from './categorie-list-routing.module';

import { CategorieListPage } from './categorie-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorieListPageRoutingModule
  ],
  declarations: [CategorieListPage]
})
export class CategorieListPageModule {}
