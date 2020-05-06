import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-create',
  templateUrl: './categorie-create.page.html',
  styleUrls: ['./categorie-create.page.scss'],
})
export class CategorieCreatePage implements OnInit {

  data: Category;

  constructor(
    public apiService: ApiService,
    public router: Router,
    public toastController: ToastController
  ) {
    this.data = new Category();
   }

  ngOnInit() {
  }
  //Notification
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Category created',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    this.apiService.createItemCategories(this.data).subscribe((response) => {
      this.router.navigate(['categorie-list']);
      this.presentToast();
    });

}}

