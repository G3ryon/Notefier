import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-edit',
  templateUrl: './categorie-edit.page.html',
  styleUrls: ['./categorie-edit.page.scss'],
})
export class CategorieEditPage implements OnInit {

  id: number;
  data: Category;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    public toastController: ToastController
  ) { 
    this.data = new Category();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getCategory(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Category updated',
      duration: 2000
    });
    toast.present();
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateCategory(this.id, this.data).subscribe(response => {
      this.router.navigate(['categorie-list']);
      this.presentToast();
    })
  }
}
