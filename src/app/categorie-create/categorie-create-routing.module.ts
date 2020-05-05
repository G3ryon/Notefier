import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieCreatePage } from './categorie-create.page';

const routes: Routes = [
  {
    path: '',
    component: CategorieCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorieCreatePageRoutingModule {}
