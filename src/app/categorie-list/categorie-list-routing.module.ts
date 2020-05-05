import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieListPage } from './categorie-list.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieListPageRoutingModule {}
