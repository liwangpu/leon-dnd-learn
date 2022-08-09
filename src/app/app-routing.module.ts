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
  {
    path: 'native-api',
    loadChildren: () => import('./native-api/native-api.module').then(m => m.NativeApiModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'native-api' },
  { path: '**', redirectTo: 'native-api' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
