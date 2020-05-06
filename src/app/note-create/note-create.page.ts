import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.page.html',
  styleUrls: ['./note-create.page.scss'],
})
export class NoteCreatePage implements OnInit {

  data: Note;
  categoryData: any;

  constructor(
    public apiService: ApiService,
    public toastController: ToastController,
    public router: Router
  ) {
    this.data = new Note();
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
  //notification
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Note created',
      duration: 2000
    });
    toast.present();
  }

  submitForm() {
    //Parsing the string from the form into a proper JSON
    let JsonString = this.data.category.toString()
    this.data.category = JSON.parse(JsonString)
    this.apiService.createItemNotes(this.data).subscribe((response) => {
      this.router.navigate(['note-list']);
      this.presentToast()
    });

}}
