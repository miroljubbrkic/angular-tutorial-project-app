import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  
  subscription!: Subscription
  editMode = false
  editedItemIndex!: number


  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index:number) => {
        this.editMode = true
      }
    )
  }

  onAddItem(form: NgForm) {
    const value = form.value
    const newIngridient = new Ingridient(value.name,value.amount)
    this.slService.addIngridient(newIngridient)
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

}
