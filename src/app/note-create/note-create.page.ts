import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

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

  submitForm() {
    console.log(this.data);
    //Parsing the string from the form into a proper JSON
    this.data.category = JSON.parse(this.data.category)
    this.apiService.createItemNotes(this.data).subscribe((response) => {
      this.router.navigate(['note-list']);
    });

}}
