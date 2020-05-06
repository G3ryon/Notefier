import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.page.html',
  styleUrls: ['./categorie-list.page.scss'],
})
export class CategorieListPage implements OnInit {

  categoryData: any;
  notesData: any;
  deletenote: any;

  constructor(
    public apiService: ApiService,
    public toastController: ToastController
  ) { 
    this.categoryData = [];
    this.notesData = [];
    this.deletenote = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllCategories();
    this.getAllNotes();
  }

  getAllCategories() {
    //Get saved list of notes
    this.apiService.getListCategories().subscribe(response => {
      console.log(response);
      this.categoryData = response;
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Category deleted',
      duration: 2000
    });
    toast.present();
  }

  getAllNotes() {
    //Get saved list of notes
    this.apiService.getListNotes().subscribe(response => {
      console.log(response);
      this.notesData = response;
    })
  }


  delete(item) {
    this.notesData.forEach(element => {
      console.log(element)
      if(item.id == element.category.id){
        this.apiService.deleteNote(element.id).subscribe(Response => {
          console.log("done")
        });
      }
    });
    //Delete item in Student data
    this.apiService.deleteCategory(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllCategories();
      this.getAllNotes();
      this.presentToast()
    });
  }

}
