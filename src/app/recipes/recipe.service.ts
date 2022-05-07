import { Injectable } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A super-tasty Schnitzel - just awesome', 
      'https://www.najbolji-recepti.com/wp-content/uploads/2015/04/becka-snicla1.jpg',
      [
        new Ingridient('Meat', 1),
        new Ingridient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger', 
      'What else you need to say', 
      'https://avmcart.com/storage/categories/4845624.jpeg',
      [
        new Ingridient('Buns', 2),
        new Ingridient('Meat', 1)
      ])
  ]


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    //.slice() - napravi kopiju niza
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngirdientsToShoppingList(ingridients: Ingridient[]) {
    this.slService.addIngridients(ingridients)
  }



}
