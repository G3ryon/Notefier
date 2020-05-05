import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.page.html',
  styleUrls: ['./note-edit.page.scss'],
})
export class NoteEditPage implements OnInit {

  id: number;
  data: Note;
  categoryData: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService) { 
      
      this.data = new Note();
      this.categoryData = [];
    }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.getAllCategories();
    //get item details using id
    this.apiService.getNote(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  getAllCategories() {
    //Get saved list of notes
    this.apiService.getListCategories().subscribe(response => {
      console.log(response);
      this.categoryData = response;
    })
  }

  update() {
    this.data.category = JSON.parse(this.data.category)
    //Update item by taking id and updated data object
    this.apiService.updateNote(this.id, this.data).subscribe(response => {
      this.router.navigate(['note-list']);
    })
  }

}
