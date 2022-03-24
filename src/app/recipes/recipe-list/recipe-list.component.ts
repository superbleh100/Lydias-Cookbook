import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Recipe } from 'src/app/core/recipe';
import { RecipeService } from 'src/app/core/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  categories = Object.keys(Category)
                     .filter(v => isNaN(Number(v)));

  constructor(
    private recipeService: RecipeService,
  ) {
    this.recipeService.getAll()
          .subscribe(r => this.recipes = r);
  }

  getRecipesInCategory(category: string): Observable<Recipe[]> {
    return this.recipeService.getRecipes(category);
  }

}
