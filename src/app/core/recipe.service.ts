import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { Category, Recipe } from "./recipe";

@Injectable({providedIn: 'root',})
export class RecipeService {
  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Lydias famous pancakes',
      category: Category.breakfast,
      tags: []
    },
    {
      id: 2,
      name: 'second',
      category: Category.breakfast,
      tags: []
    },
    {
      id: 3,
      name: 'third',
      category: Category.breakfast,
      tags: []
    },
    {
      id: 4,
      name: 'fourth',
      category: Category.breakfast,
      tags: []
    },
  ];

  getAll(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  getRecipes(category: string) {
    return this.getAll()
               .pipe(
                  map(recipes => recipes.filter(recipe => Category[recipe.category] === category)));

  }
}

