import { NgModule } from '@angular/core';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  {
    path: 'parent',
    loadChildren: () =>
      import('./features/test-page/test-page.module').then(
        (m) => m.TestPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full',
  },
];

export const routingConfiguration: ExtraOptions = {
  paramsInheritanceStrategy: 'always',
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routingConfiguration)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
