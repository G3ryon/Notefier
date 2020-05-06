import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {

  notesData: any;

  constructor(
    public apiService: ApiService,
    public toastController: ToastController
  ) { 
    this.notesData = [];
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Note deleted',
      duration: 2000
    });
    toast.present();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllNotes();
  }

  getAllNotes() {
    //Get saved list of notes
    this.apiService.getListNotes().subscribe(response => {
      console.log(response);
      this.notesData = response;
    })
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteNote(item.id).subscribe(_Response => {
      //Update list after delete is successful
      this.getAllNotes();
      this.presentToast()
    });
  }

}
