import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cdk-dnd',
    loadChildren: () => import('./cdk-dnd/cdk-dnd.module').then(m => m.CdkDndModule)
  },
  {
    path: 'sortablejs',
    loadChildren: () => import('./sortablejs/sortablejs.module').then(m => m.SortablejsModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'cdk-dnd' },
  { path: '**', redirectTo: 'cdk-dnd' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
