import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GroceryServiceService } from './grocery-service.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogServiceService {

  constructor(private alertController: AlertController, private groceryService: GroceryServiceService) { }

  async promptAlert(item?: any, id?: any) {
    const alert = await this.alertController.create({
      header: item ? 'Edit the item..': 'Add an item..',
      inputs: [
        {
          placeholder: 'Name',
          name: 'name',
          value: item ? item.name: null
        },
        {
          placeholder: 'Quantity',
          name: 'quantity',
          value: item ? item.quantity: null,
          type: 'number',
          min: 1,
        },
      ],
      buttons: [
        {
          'text': 'Cancel',
          'role': 'cancel',
        },
        {
          'text': 'Save',
          'handler': (item: any) => {
            if (id !== undefined) {
              this.groceryService.editItem(item, id)
            } else {
              this.groceryService.addItem(item)
            }
          }
        }
      ]
    });
  
    await alert.present();
  }
}
