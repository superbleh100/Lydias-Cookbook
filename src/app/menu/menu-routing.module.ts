import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuListComponent } from './menu-list/menu-list.component';

const menuRoutes: Routes = [
  { path: 'menu',  component: MenuListComponent, data: { animation: 'menues' } },
];

@NgModule({
  imports: [
    RouterModule.forChild(menuRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/