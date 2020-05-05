import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieEditPage } from './categorie-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieEditPageRoutingModule {}
