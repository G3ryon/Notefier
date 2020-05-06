import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieDetailPage } from './categorie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieDetailPageRoutingModule {}
