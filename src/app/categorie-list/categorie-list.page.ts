import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.page.html',
  styleUrls: ['./categorie-list.page.scss'],
})
export class CategorieListPage implements OnInit {

  categoryData: any;

  constructor(
    public apiService: ApiService
  ) { 
    this.categoryData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllCategories();
  }

  getAllCategories() {
    //Get saved list of notes
    this.apiService.getListCategories().subscribe(response => {
      console.log(response);
      this.categoryData = response;
    })
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteCategory(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllCategories();
    });
  }

}
