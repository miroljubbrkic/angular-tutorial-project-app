import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingridient } from '../shared/ingridient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  
  ingridients!: Ingridient[]
  private igChangeSub!: Subscription

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridients()
    this.igChangeSub = this.slService.ingridientsChanged.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients
      }
    )
  }

  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe()
  }

}
