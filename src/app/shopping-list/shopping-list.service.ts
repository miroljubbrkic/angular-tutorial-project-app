import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingridient } from '../shared/ingridient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingridientsChanged = new Subject<Ingridient[]>()
  startedEditing = new Subject<number>()

  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatos', 10)
  ]

  constructor() { }

  getIngridients() {
    return this.ingridients.slice()
  }

  getIngridient(index: number) {
    return this.ingridients[index]
  }

  addIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient)
    this.ingridientsChanged.next(this.ingridients.slice())
  }

  addIngridients(ingridients: Ingridient[]) {
    this.ingridients.push(...ingridients)
    this.ingridientsChanged.next(this.ingridients.slice())
  }

  updateIngredient(index: number, newIngridient: Ingridient) {
    this.ingridients[index] = newIngridient
    this.ingridientsChanged.next(this.ingridients.slice())
  }

  deleteIngridient(index: number) {
    this.ingridients.splice(index,1)
    this.ingridientsChanged.next(this.ingridients.slice())
  }


}
