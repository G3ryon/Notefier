import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'note-list',
    pathMatch: 'full'
  },
  {
    path: 'note-create',
    loadChildren: () => import('./note-create/note-create.module').then( m => m.NoteCreatePageModule)
  },
  {
    path: 'note-edit',
    loadChildren: () => import('./note-edit/note-edit.module').then( m => m.NoteEditPageModule)
  },
  {
    path: 'note-list',
    loadChildren: () => import('./note-list/note-list.module').then( m => m.NoteListPageModule)
  },
  {
    path: 'note-detail',
    loadChildren: () => import('./note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
  },
  {
    path: 'categorie-list',
    loadChildren: () => import('./categorie-list/categorie-list.module').then( m => m.CategorieListPageModule)
  },
  {
    path: 'categorie-edit',
    loadChildren: () => import('./categorie-edit/categorie-edit.module').then( m => m.CategorieEditPageModule)
  },
  {
    path: 'categorie-create',
    loadChildren: () => import('./categorie-create/categorie-create.module').then( m => m.CategorieCreatePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
