import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { Category } from '../models/category';
import { ApiService } from '../services/api.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {

  id: number;
  data: Note;
  categorystr:string;
  category: Category;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) { 
    this.data = new Note();
    this.category = new Category();
  }

  ngOnInit() {
      this.id = this.activatedRoute.snapshot.params["id"];
      //get item details using id
      this.apiService.getNote(this.id).subscribe(response => {
      console.log(response.category);
      this.data = response;
      //parsing the json again to be able to use it
      this.categorystr = JSON.stringify(this.data.category);
      this.category = JSON.parse(this.categorystr);
    })
  }


}
