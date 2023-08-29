import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent',
    loadChildren: () => import('./features/dynamic/dynamic.module').then((m) => m.DynamicModule),
  },
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full',
  }
];

export const routingConfiguration: ExtraOptions = {
    paramsInheritanceStrategy: 'always',
    preloadingStrategy: PreloadAllModules
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routingConfiguration)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
