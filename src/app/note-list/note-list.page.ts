import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {

  notesData: any;

  constructor(
    public apiService: ApiService
  ) { 
    this.notesData = [];
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllNotes();
  }

  getAllNotes() {
    //Get saved list of notes
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.notesData = response;
    })
  }

  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllNotes();
    });
  }

}
