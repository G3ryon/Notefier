import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.page.html',
  styleUrls: ['./categorie-detail.page.scss'],
})
export class CategorieDetailPage implements OnInit {

  id: number;
  Notes: any;
  category: Category;
  notesData: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService,
    public toastController: ToastController
  ) {
    this.Notes = [];
    this.notesData = [];
    this.category = new Category();
   }

   getAllNotes() {
    //Get saved list of notes
    this.apiService.getListNotes().subscribe(response => {
      console.log(response);
      this.notesData = response;
    })
  }

  

   ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getCategory(this.id).subscribe(response => {
    this.category = response;
  }) 
  this.apiService.getListNotes().subscribe(response => {
      
      this.notesData = response;
      this.notesData.forEach(element => {
    
      if(this.id == element.category.id){
      this.Notes.push(element);

      }
     });
    })}
  
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Note deleted',
        duration: 2000
      });
      toast.present();
    }

    delete(item) {
      //Delete item in Student data
      this.apiService.deleteNote(item.id).subscribe(_Response => {
        //Update list after delete is successful
        this.router.navigate(['categorie-list']);
        this.presentToast()
      });
    }
  


}
