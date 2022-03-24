import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipes-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    MatExpansionModule,
    RecipeRoutingModule,
  ]
})
export class RecipesModule { }
