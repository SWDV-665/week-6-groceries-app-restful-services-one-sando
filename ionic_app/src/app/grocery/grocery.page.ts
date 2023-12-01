import { Component, ChangeDetectorRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonItemOptions, IonItemOption, IonItemSliding, IonIcon, IonFab, IonFabButton, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { create, trash, add, share } from 'ionicons/icons';
import { ToastController } from '@ionic/angular';
import { GroceryServiceService } from '../grocery-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
import { Share } from '@capacitor/share';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grocery',
  templateUrl: 'grocery.page.html',
  styleUrls: ['grocery.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonLabel, IonItem, IonItemOptions, IonItemOption, IonItemSliding, CommonModule, IonIcon, IonFab, IonFabButton, IonButton ],
})

export class GroceryPage  {

  title = 'Grocery List'
  items: any = []

  constructor(private toastController: ToastController, private groceryService: GroceryServiceService, private inputDialogService: InputDialogServiceService, private cdRef: ChangeDetectorRef) {
    addIcons({ trash, create, add, share });

    groceryService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadItems();
    })
  }

  loadItems(): void {
    this.groceryService.getItems().subscribe(
      (items: Object[]) => {
        this.items = items;
      }
    );
  }

  removeItem(item: any) {
    console.log('Removing ', item)
    this.groceryService.deleteItem(item)
    this.presentToast(`${item.name} has been deleted.`);
    this.cdRef.detectChanges();
  }

  editItem(item: any) {
    console.log('Editing ', item._id)
    this.inputDialogService.promptAlert(item, item._id)
    this.presentToast(`${item.name} has been edited.`);
    this.cdRef.detectChanges();
  }

  addItem() {
    console.log('Adding Item')
    this.inputDialogService.promptAlert()
    this.cdRef.detectChanges();
  }

  async shareItem(item: any, index: number) {
    console.log('Sharing ', item, index)
    await Share.share({
      title: 'Item',
      text: 'Name: ' + item.name + ' Quantity: ' + item.quantity,
    });
    this.presentToast(`${item.name} has been shared.`);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
    });
    await toast.present();
  }
}